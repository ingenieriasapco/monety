import Realm from 'realm';

const cardCreditSchema = {
	name  : 'Card',
	schemaVersion : 1,
	properties : {
		name     : { type : 'string', indexed : true },
		tax      : { type : 'int', default: 0},
		maxMount : { type : 'int', default: 0}, // Asi?
		type     : 'string',
	}
};

const userPhoneSchema = {
	name  : 'userPhone',
	schemaVersion : 1,
	properties : {
		name  : 'string',
		email : { type: 'string', optional: true},
		token : 'string'
	}
};

export default new Realm({schema: [userPhoneSchema, cardCreditSchema]});