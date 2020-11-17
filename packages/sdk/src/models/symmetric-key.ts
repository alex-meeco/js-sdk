import cryppo from '../services/cryppo-service';

export const SYMMETRIC_KEY_LENGTH = 32;
export const SYMMETRIC_KEY_STRATEGY = cryppo.CipherStrategy.AES_GCM;

/**
 * An key that can be used to encrypt and decrypt data travelling to and from Meeco's services.
 * This wrapper ensures that keys can be safely serialized as JSON (by encoding them as URL-Safe Base64)
 * and avoids confusion when dealing with converting to and from this encoded format.
 *
 * It specifies a default length and a default encryption method for using the key.
 */
export class SymmetricKey {
  // This describes the base64 format defined by cryppo.encodeSafe64
  private static base64RE = /^[a-zA-Z0-9\-_=]*$/;

  /**
   * The constructor is intentionally private as we want the user ot be explicit as to whether the value coming
   * in is raw bytes or a base64 encoded version.
   *
   * @param _value  Value as binary string. Avoid outputting to console but should be used for actual encryption.
   */
  private constructor(private readonly _value: string) {
    if (!_value) {
      throw new Error('Empty encryption key!');
    }
  }

  static new(): SymmetricKey {
    return SymmetricKey.fromRaw(cryppo.generateRandomKey(SYMMETRIC_KEY_LENGTH));
  }

  /**
   * Create a {@link SymmetricKey} from encoded URL-safe base 64 version of the key.
   * Use this for keys received via API calls or printed from the CLI.
   */
  static fromSerialized(value: string) {
    if (!value) {
      throw new Error('Symmetric Key cannot be constructed from an empty string');
    }

    if (!value.match(SymmetricKey.base64RE)) {
      throw new Error(`Serialized key ${value} did not match base64 format`);
    }

    const parseResult = cryppo.decodeSafe64(value || '');
    return new SymmetricKey(parseResult);
  }

  /**
   * Create an {@link SymmetricKey} from a binary string version of the key.
   * Use this for keys created by calls to cryppo.
   */
  static fromRaw(value: string, expectedLength = SYMMETRIC_KEY_LENGTH) {
    // if (value.length !== expectedLength) {
    //   throw new Error(`Key length did not equal ${expectedLength}`);
    // }
    return new SymmetricKey(value);
  }

  /**
   * @returns the raw encryption key
   */
  get key() {
    return this._value;
  }

  /**
   * Implicitly called by `JSON.stringify()` to ensure that the value is safely printable
   */
  toJSON() {
    return cryppo.encodeSafe64(this._value);
  }

  /**
   * Used to encrypt user-entered data such as birthdays or name.
   * Should *not* be used to encrypt keys - use [encryptKey] instead.
   * Encryption keys are considered binary data even though they are often represented as strings
   */
  async encryptString(value: string | null): Promise<string | null> {
    if (value === null || value === '') {
      return null;
    }
    return cryppo
      .encryptStringWithKey({
        data: value,
        key: this.key,
        strategy: SYMMETRIC_KEY_STRATEGY,
      })
      .then(result => result.serialized);
  }

  /**
   * Used to encrypt generated bytes such as encryption keys or verification keys.
   * N.B.. Encryption keys are considered binary data even though they are often represented as strings
   */
  async encryptKey(key: { key: string }): Promise<string> {
    return cryppo
      .encryptBinaryWithKey({
        data: key.key,
        key: this.key,
        strategy: SYMMETRIC_KEY_STRATEGY,
      })
      .then(result => result.serialized!);
  }

  /**
   * Used to decrypt user-entered data such as birthdays or name.
   * Should *not* be used to decrypt keys - use [decryptKey] instead.
   * Encryption keys are considered binary data even though they are often represented as strings
   *
   * Accepts string or null for compatibility with API return types.
   */
  async decryptString(serialized: string | null): Promise<string | null> {
    if (serialized === null) {
      return null;
    }

    return cryppo.decryptStringWithKey({
      key: this.key,
      serialized,
    });
  }

  /**
   * Used to decrypt generated bytes such as encryption keys or verification keys.
   * N.B.. Encryption keys are considered binary data even though they are often represented as strings
   */
  async decryptKey(serialized: string): Promise<SymmetricKey> {
    return cryppo
      .decryptBinaryWithKey({
        key: this.key,
        serialized,
      })
      .then(result => SymmetricKey.fromRaw(result!));
  }
}
