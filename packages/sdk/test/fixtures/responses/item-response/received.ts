import { ItemResponse, SlotSlotTypeNameEnum } from '@meeco/vault-api-sdk';

// not owned
const response: ItemResponse = {
  item: {
    id: 'd1439584-9884-4153-8607-a3af3c140798',
    name: 'my_vehicle',
    label: 'My Vehicle',
    description: '',
    created_at: new Date(1),
    item_template_id: '043fca7a-ef90-4557-ba42-01b618ee7dce',
    ordinal: 0,
    visible: true,
    updated_at: new Date(1),
    item_template_label: 'Vehicle',
    item_image: 'http://localhost:3000/images/0f6712af-910f-41f7-9201-b3067d0b0c79',
    original_id: 'd6b56fe4-266a-46ca-b6bd-822848333f13',
    owner_id: '7ffdb069-9c8a-48a8-b36f-d974e1e87702',
    share_id: '7caa711f-8b8b-46b9-b70b-08e19013e449',
    image: 'http://localhost:3000/images/0f6712af-910f-41f7-9201-b3067d0b0c79',
    classification_node_ids: [
      'dfd8b1ad-6da1-4c25-ad4e-98e66fdc787e',
      '8e6bb745-1260-4163-a336-ec461aea97ec',
    ],
    slot_ids: [
      '184d9090-629f-4901-a1b9-621f04e54607',
      '5f12a1c5-904e-4cd9-af15-e1f00237c0b9',
      'c34c4deb-d86c-49ff-b7bf-e114d6e18efd',
      'c873f53c-23ca-4f21-b70d-5f6f3498d4e8',
      'be2a6e69-ecd3-4534-998d-d1f6713e8b7b',
    ],
    own: false,
  },
  classification_nodes: [
    {
      id: 'dfd8b1ad-6da1-4c25-ad4e-98e66fdc787e',
      background_color: null,
      description: null,
      image: 'http://localhost:3000/images/2fafba87-04d1-413b-a0e9-5dd9b4424eb3',
      label: 'eSafe Templates',
      name: 'esafe_templates',
      ordinal: 1,
      scheme: 'esafe',
      classifications_count: 1,
    },
    {
      id: '8e6bb745-1260-4163-a336-ec461aea97ec',
      background_color: '#FF00FF',
      description: null,
      image: 'http://localhost:3000/images/0f6712af-910f-41f7-9201-b3067d0b0c79',
      label: 'Vehicles',
      name: 'vehicles',
      ordinal: 3,
      scheme: 'esafe',
      classifications_count: 1,
    },
  ],
  slots: [
    {
      id: '184d9090-629f-4901-a1b9-621f04e54607',
      name: 'type',
      description: null,
      ordinal: 0,
      visible: true,
      classification_node_ids: [],
      item_id: 'd1439584-9884-4153-8607-a3af3c140798',
      required: false,
      updated_at: new Date(1),
      created_at: new Date(1),
      slot_type_name: SlotSlotTypeNameEnum.KeyValue,
      creator: 'system',
      label: 'Type',
      attachment_id: null,
      own: false,
      share_id: '7caa711f-8b8b-46b9-b70b-08e19013e449',
      original_id: '00b36835-09fd-4c34-9f9a-5078e96a37a6',
      owner_id: '7ffdb069-9c8a-48a8-b36f-d974e1e87702',
      encrypted_value:
        'Aes256Gcm.nGqueYPp.QUAAAAAFaXYADAAAAAAG3ailZ0WxAZMFdo4FYXQAEAAAAABZ0lxZ_OUHkW1Ldf5QAKusAmFkAAUAAABub25lAAA=',
      encrypted_value_verification_key:
        'Aes256Gcm.LyL1Vxvuf4PkQbQZVvxGuLchmy3T4putDPn37BepcXTzhYH-sgdvKNK7--SHIQyrJUqbRb3HaM0732OII_7Bbg==.QUAAAAAFaXYADAAAAAB-clEQajK8Mtffw6QFYXQAEAAAAABeKKg3zzFobkLfUJg1oO48AmFkAAUAAABub25lAAA=',
      value_verification_hash: '9e4af7cdec0952e31457a802948d326066b0883753cf30b5dc7653cf880b3eef',
    },
    {
      id: '5f12a1c5-904e-4cd9-af15-e1f00237c0b9',
      name: 'vin',
      description: null,
      ordinal: 0,
      visible: true,
      classification_node_ids: [],
      item_id: 'd1439584-9884-4153-8607-a3af3c140798',
      required: false,
      updated_at: new Date(1),
      created_at: new Date(1),
      slot_type_name: SlotSlotTypeNameEnum.KeyValue,
      creator: 'system',
      label: 'VIN',
      attachment_id: null,
      own: false,
      share_id: '7caa711f-8b8b-46b9-b70b-08e19013e449',
      original_id: 'e826b83f-43a5-46eb-8898-2bf14f302f30',
      owner_id: '7ffdb069-9c8a-48a8-b36f-d974e1e87702',
      encrypted_value:
        'Aes256Gcm.st9nKU4_8Dn20xc=.QUAAAAAFaXYADAAAAAA37wHFyaGITeGVFREFYXQAEAAAAADnQvFmhyG_NqqF2OvPC8CAAmFkAAUAAABub25lAAA=',
      encrypted_value_verification_key:
        'Aes256Gcm.HCzA77aiI9RlLxfarHdWEoaeDYWVUWZ5A_OPp-EQB7S5k_CERyx4Bbqo5WsUES7TAMlACWEn1FtgImhHYa4xkQ==.QUAAAAAFaXYADAAAAACx3m-dZVxeZAaUteYFYXQAEAAAAAAJM8Zp02qrGmIaJVZt0U-kAmFkAAUAAABub25lAAA=',
      value_verification_hash: '79ec58cd8cb548fa19ae6ed103c5d60f03feb5d2936023f24c8096a57eb34975',
    },
    {
      id: 'c34c4deb-d86c-49ff-b7bf-e114d6e18efd',
      name: 'purchase_date',
      description: null,
      ordinal: 0,
      visible: true,
      classification_node_ids: [],
      item_id: 'd1439584-9884-4153-8607-a3af3c140798',
      required: false,
      updated_at: new Date(1),
      created_at: new Date(1),
      slot_type_name: SlotSlotTypeNameEnum.Date,
      creator: 'system',
      label: 'Date purchased',
      attachment_id: null,
      own: false,
      share_id: '7caa711f-8b8b-46b9-b70b-08e19013e449',
      original_id: '18b3c017-bc45-4e27-af54-ce21326a8237',
      owner_id: '7ffdb069-9c8a-48a8-b36f-d974e1e87702',
      encrypted_value:
        'Aes256Gcm.kgTskuONSZ4=.QUAAAAAFaXYADAAAAAAbfNMcFwUoe3Udw0UFYXQAEAAAAAAO3tWJyrIkq9WB91eQpOv6AmFkAAUAAABub25lAAA=',
      encrypted_value_verification_key:
        'Aes256Gcm.eORAFOSUPPkiNreJ5rYPuF5-Hikl8FTz4OvfX0R5WvDb55mRdD7UEb1bsoGBvgVu4NSSHVvc6yIjwr437rsyzQ==.QUAAAAAFaXYADAAAAADPAnc1U41oJJbcKYAFYXQAEAAAAADwPWnq-jfPEPYX8M6WiPkvAmFkAAUAAABub25lAAA=',
      value_verification_hash: '0c300a1ddab9571f2f9cdd97c74d664592d666683d53e6481436e2f565e1ed8f',
    },
    {
      id: 'c873f53c-23ca-4f21-b70d-5f6f3498d4e8',
      name: 'model_make',
      description: null,
      ordinal: 0,
      visible: true,
      classification_node_ids: [],
      item_id: 'd1439584-9884-4153-8607-a3af3c140798',
      required: false,
      updated_at: new Date(1),
      created_at: new Date(1),
      slot_type_name: SlotSlotTypeNameEnum.KeyValue,
      creator: 'system',
      label: 'Make or model',
      attachment_id: null,
      own: false,
      share_id: '7caa711f-8b8b-46b9-b70b-08e19013e449',
      original_id: '1a7eab30-56c7-429a-b27a-ec3d0d4f9794',
      owner_id: '7ffdb069-9c8a-48a8-b36f-d974e1e87702',
      encrypted_value:
        'Aes256Gcm.2R5WgsWt.QUAAAAAFaXYADAAAAAB6e_F6X0nEWnISjzYFYXQAEAAAAAB64YVRCOX9PxBorBY12QtAAmFkAAUAAABub25lAAA=',
      encrypted_value_verification_key:
        'Aes256Gcm.g1D__2xadngrwKYNCrHWa9QyW2-8Z8tShMXGiP4816h_0N2sOh7llTaRA1xSzdRcuoi3-hQUzu2OHW_va6Mj8g==.QUAAAAAFaXYADAAAAAAXIw_ag-g4S2F9AXgFYXQAEAAAAAB3y9DV0dVVXnZwg8O0S2CjAmFkAAUAAABub25lAAA=',
      value_verification_hash: '936a03c57d58297871cd4d86b00bad568daf295c6217600e8f44d69dd21350fd',
    },
    {
      id: 'be2a6e69-ecd3-4534-998d-d1f6713e8b7b',
      name: 'licence_plate',
      description: null,
      ordinal: 0,
      visible: true,
      classification_node_ids: [],
      item_id: 'd1439584-9884-4153-8607-a3af3c140798',
      required: false,
      updated_at: new Date(1),
      created_at: new Date(1),
      slot_type_name: SlotSlotTypeNameEnum.KeyValue,
      creator: 'system',
      label: 'Vehicle registration number',
      attachment_id: null,
      own: false,
      share_id: '7caa711f-8b8b-46b9-b70b-08e19013e449',
      original_id: '73245de8-f1be-4307-8c74-bffe69ba81f7',
      owner_id: '7ffdb069-9c8a-48a8-b36f-d974e1e87702',
      encrypted_value:
        'Aes256Gcm.ZmpAKg==.QUAAAAAFaXYADAAAAADv85Nc0fM6z9ji1ukFYXQAEAAAAAAt-GhmYRfoZt31IyGS9lfUAmFkAAUAAABub25lAAA=',
      encrypted_value_verification_key:
        'Aes256Gcm.kqbIJt8jzxfDaLq0UaIDAaR-11ak8GP29HD453A_Azns7Tnd0-fwupw4pEJUs2OBrwSMsSBFSHoB86eCL4PjJw==.QUAAAAAFaXYADAAAAABdRDq7d6X7C3eAHnEFYXQAEAAAAADaqY9Wq302TwhqWwMZ8Ss3AmFkAAUAAABub25lAAA=',
      value_verification_hash: 'dba94c00d328de197dd273ae151d9723d8792c7663f6fc41ff6f3df4cdcfbac8',
    },
  ],
  attachments: [],
  thumbnails: [],
};

export default response;
