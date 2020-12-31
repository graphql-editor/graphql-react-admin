/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** Truck driver */
["Driver"]: AliasType<{
	checkIns?:ValueTypes["CheckIn"],
	firstName?:true,
	/** Personal identification number or passport number */
	idNumber?:true,
	lastName?:true,
	phone?:true,
	trailerNumber?:true,
	truckNumber?:true,
		__typename?: true
}>;
	/** Kind of check-in */
["CheckInType"]:CheckInType;
	["DetailsAddress"]: {
	addressKey:string
};
	["Query"]: AliasType<{
	adminQuery?:ValueTypes["AdminQuery"],
	driverQuery?:ValueTypes["DriverQuery"],
		__typename?: true
}>;
	["DriverOrder"]: AliasType<{
	checkIns?:ValueTypes["CheckIn"],
	loadAddress?:ValueTypes["Address"],
	pieces?:true,
	/** The date order should be finalized */
	plannedEndDate?:true,
	/** Reference id of order */
	refId?:true,
	unloadAddress?:ValueTypes["Address"],
	/** Weight in kilograms */
	weight?:true,
		__typename?: true
}>;
	["Address"]: AliasType<{
	city?:true,
	countryCode?:true,
	location?:ValueTypes["Location"],
	name?:true,
	street?:true,
	string?:true,
	unit?:true,
	zipCode?:true,
		__typename?: true
}>;
	["CreateAddress"]: {
	city:string,
	zipCode:string,
	countryCode:string,
	name?:string,
	street:string,
	unit:string
};
	["DriverQuery"]: AliasType<{
driverOrderByRefId?: [{	detailsOrder:ValueTypes["DetailsOrder"]},ValueTypes["DriverOrder"]],
	driverOrders?:ValueTypes["DriverOrder"],
		__typename?: true
}>;
	["CreateDriver"]: {
	phone:string,
	/** Personal identification number or passport number */
	idNumber?:string,
	truckNumber:string,
	trailerNumber?:string,
	firstName?:string,
	lastName?:string
};
	["CreateCheckIn"]: {
	createLocation:ValueTypes["CreateLocation"],
	checkInType?:ValueTypes["CheckInType"]
};
	["CreateOrder"]: {
	weight?:number,
	loadAddressKey:ValueTypes["DetailsAddress"],
	unloadAddressKey:ValueTypes["DetailsAddress"],
	pieces?:number,
	refId:string,
	plannedEndDate:string
};
	["CheckIn"]: AliasType<{
	checkInType?:true,
	createdAt?:true,
	driver?:ValueTypes["Driver"],
	location?:ValueTypes["Location"],
	order?:ValueTypes["Order"],
		__typename?: true
}>;
	["Order"]: AliasType<{
	checkIns?:ValueTypes["CheckIn"],
	createdAt?:true,
	driver?:ValueTypes["Driver"],
	loadAddress?:ValueTypes["Address"],
	pieces?:true,
	/** The date order should be finalized */
	plannedEndDate?:true,
	/** Reference id of order */
	refId?:true,
	unloadAddress?:ValueTypes["Address"],
	/** Weight in kilograms */
	weight?:true,
		__typename?: true
}>;
	["Location"]: AliasType<{
	latitude?:true,
	longitude?:true,
		__typename?: true
}>;
	["Mutation"]: AliasType<{
	adminMutation?:ValueTypes["AdminMutation"],
	driverMutation?:ValueTypes["DriverMutation"],
		__typename?: true
}>;
	["UpdateOrder"]: {
	refId?:string
};
	["DriverMutation"]: AliasType<{
createCheckIn?: [{	createCheckIn:ValueTypes["CreateCheckIn"]},true],
		__typename?: true
}>;
	["CreateLocation"]: {
	latitude:number,
	longitude:number
};
	["DetailsOrder"]: {
	refId:string
};
	["AdminQuery"]: AliasType<{
driverByPhone?: [{	detailsDriver?:ValueTypes["DetailsDriver"]},ValueTypes["Driver"]],
	listDriver?:ValueTypes["Driver"],
	listOrders?:ValueTypes["Order"],
lookUpAddress?: [{	query:string},ValueTypes["Address"]],
orderByRefId?: [{	detailsOrder:ValueTypes["DetailsOrder"]},ValueTypes["Order"]],
		__typename?: true
}>;
	["DetailsDriver"]: {
	phone?:string
};
	["UpdateDriver"]: {
	/** Personal identification number or passport number */
	idNumber?:string,
	truckNumber?:string,
	trailerNumber?:string,
	firstName?:string,
	lastName?:string,
	phone?:string
};
	["AdminMutation"]: AliasType<{
createAddress?: [{	createAddress:ValueTypes["CreateAddress"]},true],
createDriver?: [{	createDriver:ValueTypes["CreateDriver"]},true],
createOrder?: [{	createOrder:ValueTypes["CreateOrder"]},true],
removeAddress?: [{	detailsAddress:ValueTypes["DetailsAddress"]},true],
removeDriver?: [{	detailsDriver:ValueTypes["DetailsDriver"]},true],
removeOrder?: [{	detailsOrder:ValueTypes["DetailsOrder"]},true],
updateAddress?: [{	updateAddress:ValueTypes["UpdateAddress"],	detailsAddress:ValueTypes["DetailsAddress"]},true],
updateDriver?: [{	updateDriver:ValueTypes["UpdateDriver"],	detailsDriver:ValueTypes["DetailsDriver"]},true],
updateOrder?: [{	updateOrder:ValueTypes["UpdateOrder"],	detailsOrder:ValueTypes["DetailsOrder"]},true],
		__typename?: true
}>;
	["UpdateAddress"]: {
	street?:string,
	unit?:string,
	city?:string,
	zipCode?:string,
	countryCode?:string,
	name?:string
}
  }

export type ModelTypes = {
    /** Truck driver */
["Driver"]: {
		checkIns:ModelTypes["CheckIn"][],
	firstName?:string,
	/** Personal identification number or passport number */
	idNumber?:string,
	lastName?:string,
	phone:string,
	trailerNumber?:string,
	truckNumber:string
};
	/** Kind of check-in */
["CheckInType"]: GraphQLTypes["CheckInType"];
	["DetailsAddress"]: GraphQLTypes["DetailsAddress"];
	["Query"]: {
		adminQuery?:ModelTypes["AdminQuery"],
	driverQuery?:ModelTypes["DriverQuery"]
};
	["DriverOrder"]: {
		checkIns:ModelTypes["CheckIn"][],
	loadAddress:ModelTypes["Address"],
	pieces?:number,
	/** The date order should be finalized */
	plannedEndDate:string,
	/** Reference id of order */
	refId:string,
	unloadAddress:ModelTypes["Address"],
	/** Weight in kilograms */
	weight?:number
};
	["Address"]: {
		city:string,
	countryCode:string,
	location?:ModelTypes["Location"],
	name?:string,
	street:string,
	string?:string,
	unit:string,
	zipCode:string
};
	["CreateAddress"]: GraphQLTypes["CreateAddress"];
	["DriverQuery"]: {
		driverOrderByRefId:ModelTypes["DriverOrder"],
	driverOrders:ModelTypes["DriverOrder"][]
};
	["CreateDriver"]: GraphQLTypes["CreateDriver"];
	["CreateCheckIn"]: GraphQLTypes["CreateCheckIn"];
	["CreateOrder"]: GraphQLTypes["CreateOrder"];
	["CheckIn"]: {
		checkInType?:ModelTypes["CheckInType"],
	createdAt:string,
	driver:ModelTypes["Driver"],
	location:ModelTypes["Location"],
	order:ModelTypes["Order"]
};
	["Order"]: {
		checkIns:ModelTypes["CheckIn"][],
	createdAt:string,
	driver?:ModelTypes["Driver"],
	loadAddress:ModelTypes["Address"],
	pieces?:number,
	/** The date order should be finalized */
	plannedEndDate:string,
	/** Reference id of order */
	refId:string,
	unloadAddress:ModelTypes["Address"],
	/** Weight in kilograms */
	weight?:number
};
	["Location"]: {
		latitude:number,
	longitude:number
};
	["Mutation"]: {
		adminMutation?:ModelTypes["AdminMutation"],
	driverMutation?:ModelTypes["DriverMutation"]
};
	["UpdateOrder"]: GraphQLTypes["UpdateOrder"];
	["DriverMutation"]: {
		createCheckIn?:string
};
	["CreateLocation"]: GraphQLTypes["CreateLocation"];
	["DetailsOrder"]: GraphQLTypes["DetailsOrder"];
	["AdminQuery"]: {
		driverByPhone:ModelTypes["Driver"],
	listDriver?:ModelTypes["Driver"][],
	listOrders:ModelTypes["Order"][],
	lookUpAddress:ModelTypes["Address"][],
	orderByRefId:ModelTypes["Order"]
};
	["DetailsDriver"]: GraphQLTypes["DetailsDriver"];
	["UpdateDriver"]: GraphQLTypes["UpdateDriver"];
	["AdminMutation"]: {
		createAddress?:string,
	createDriver?:string,
	createOrder?:string,
	removeAddress?:boolean,
	removeDriver?:boolean,
	removeOrder?:boolean,
	updateAddress?:boolean,
	updateDriver?:boolean,
	updateOrder?:boolean
};
	["UpdateAddress"]: GraphQLTypes["UpdateAddress"]
    }

export type GraphQLTypes = {
    /** Truck driver */
["Driver"]: {
	__typename: "Driver",
	checkIns:GraphQLTypes["CheckIn"][],
	firstName?:string,
	/** Personal identification number or passport number */
	idNumber?:string,
	lastName?:string,
	phone:string,
	trailerNumber?:string,
	truckNumber:string
};
	/** Kind of check-in */
["CheckInType"]: CheckInType;
	["DetailsAddress"]: {
		addressKey:string
};
	["Query"]: {
	__typename: "Query",
	adminQuery?:GraphQLTypes["AdminQuery"],
	driverQuery?:GraphQLTypes["DriverQuery"]
};
	["DriverOrder"]: {
	__typename: "DriverOrder",
	checkIns:GraphQLTypes["CheckIn"][],
	loadAddress:GraphQLTypes["Address"],
	pieces?:number,
	/** The date order should be finalized */
	plannedEndDate:string,
	/** Reference id of order */
	refId:string,
	unloadAddress:GraphQLTypes["Address"],
	/** Weight in kilograms */
	weight?:number
};
	["Address"]: {
	__typename: "Address",
	city:string,
	countryCode:string,
	location?:GraphQLTypes["Location"],
	name?:string,
	street:string,
	string?:string,
	unit:string,
	zipCode:string
};
	["CreateAddress"]: {
		city:string,
	zipCode:string,
	countryCode:string,
	name?:string,
	street:string,
	unit:string
};
	["DriverQuery"]: {
	__typename: "DriverQuery",
	driverOrderByRefId:GraphQLTypes["DriverOrder"],
	driverOrders:GraphQLTypes["DriverOrder"][]
};
	["CreateDriver"]: {
		phone:string,
	/** Personal identification number or passport number */
	idNumber?:string,
	truckNumber:string,
	trailerNumber?:string,
	firstName?:string,
	lastName?:string
};
	["CreateCheckIn"]: {
		createLocation:GraphQLTypes["CreateLocation"],
	checkInType?:GraphQLTypes["CheckInType"]
};
	["CreateOrder"]: {
		weight?:number,
	loadAddressKey:GraphQLTypes["DetailsAddress"],
	unloadAddressKey:GraphQLTypes["DetailsAddress"],
	pieces?:number,
	refId:string,
	plannedEndDate:string
};
	["CheckIn"]: {
	__typename: "CheckIn",
	checkInType?:GraphQLTypes["CheckInType"],
	createdAt:string,
	driver:GraphQLTypes["Driver"],
	location:GraphQLTypes["Location"],
	order:GraphQLTypes["Order"]
};
	["Order"]: {
	__typename: "Order",
	checkIns:GraphQLTypes["CheckIn"][],
	createdAt:string,
	driver?:GraphQLTypes["Driver"],
	loadAddress:GraphQLTypes["Address"],
	pieces?:number,
	/** The date order should be finalized */
	plannedEndDate:string,
	/** Reference id of order */
	refId:string,
	unloadAddress:GraphQLTypes["Address"],
	/** Weight in kilograms */
	weight?:number
};
	["Location"]: {
	__typename: "Location",
	latitude:number,
	longitude:number
};
	["Mutation"]: {
	__typename: "Mutation",
	adminMutation?:GraphQLTypes["AdminMutation"],
	driverMutation?:GraphQLTypes["DriverMutation"]
};
	["UpdateOrder"]: {
		refId?:string
};
	["DriverMutation"]: {
	__typename: "DriverMutation",
	createCheckIn?:string
};
	["CreateLocation"]: {
		latitude:number,
	longitude:number
};
	["DetailsOrder"]: {
		refId:string
};
	["AdminQuery"]: {
	__typename: "AdminQuery",
	driverByPhone:GraphQLTypes["Driver"],
	listDriver?:GraphQLTypes["Driver"][],
	listOrders:GraphQLTypes["Order"][],
	lookUpAddress:GraphQLTypes["Address"][],
	orderByRefId:GraphQLTypes["Order"]
};
	["DetailsDriver"]: {
		phone?:string
};
	["UpdateDriver"]: {
		/** Personal identification number or passport number */
	idNumber?:string,
	truckNumber?:string,
	trailerNumber?:string,
	firstName?:string,
	lastName?:string,
	phone?:string
};
	["AdminMutation"]: {
	__typename: "AdminMutation",
	createAddress?:string,
	createDriver?:string,
	createOrder?:string,
	removeAddress?:boolean,
	removeDriver?:boolean,
	removeOrder?:boolean,
	updateAddress?:boolean,
	updateDriver?:boolean,
	updateOrder?:boolean
};
	["UpdateAddress"]: {
		street?:string,
	unit?:string,
	city?:string,
	zipCode?:string,
	countryCode?:string,
	name?:string
}
    }
/** Kind of check-in */
export enum CheckInType {
	UNLOAD_ARRIVAL_NOTICE = "UNLOAD_ARRIVAL_NOTICE",
	UNLOADED = "UNLOADED",
	ARRIVAL_NOTICE = "ARRIVAL_NOTICE",
	LOADED = "LOADED"
}

export const AllTypesProps: Record<string,any> = {
	CheckInType: "enum",
	DetailsAddress:{
		addressKey:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateAddress:{
		city:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		zipCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		countryCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		street:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		unit:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	DriverQuery:{
		driverOrderByRefId:{
			detailsOrder:{
				type:"DetailsOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CreateDriver:{
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		idNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		truckNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		trailerNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		firstName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CreateCheckIn:{
		createLocation:{
			type:"CreateLocation",
			array:false,
			arrayRequired:false,
			required:true
		},
		checkInType:{
			type:"CheckInType",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CreateOrder:{
		weight:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		loadAddressKey:{
			type:"DetailsAddress",
			array:false,
			arrayRequired:false,
			required:true
		},
		unloadAddressKey:{
			type:"DetailsAddress",
			array:false,
			arrayRequired:false,
			required:true
		},
		pieces:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		refId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		plannedEndDate:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateOrder:{
		refId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DriverMutation:{
		createCheckIn:{
			createCheckIn:{
				type:"CreateCheckIn",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CreateLocation:{
		latitude:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:true
		},
		longitude:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	DetailsOrder:{
		refId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	AdminQuery:{
		driverByPhone:{
			detailsDriver:{
				type:"DetailsDriver",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		lookUpAddress:{
			query:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		orderByRefId:{
			detailsOrder:{
				type:"DetailsOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	DetailsDriver:{
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateDriver:{
		idNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		truckNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		trailerNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		firstName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AdminMutation:{
		createAddress:{
			createAddress:{
				type:"CreateAddress",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createDriver:{
			createDriver:{
				type:"CreateDriver",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		createOrder:{
			createOrder:{
				type:"CreateOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeAddress:{
			detailsAddress:{
				type:"DetailsAddress",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeDriver:{
			detailsDriver:{
				type:"DetailsDriver",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeOrder:{
			detailsOrder:{
				type:"DetailsOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateAddress:{
			updateAddress:{
				type:"UpdateAddress",
				array:false,
				arrayRequired:false,
				required:true
			},
			detailsAddress:{
				type:"DetailsAddress",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateDriver:{
			updateDriver:{
				type:"UpdateDriver",
				array:false,
				arrayRequired:false,
				required:true
			},
			detailsDriver:{
				type:"DetailsDriver",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateOrder:{
			updateOrder:{
				type:"UpdateOrder",
				array:false,
				arrayRequired:false,
				required:true
			},
			detailsOrder:{
				type:"DetailsOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	UpdateAddress:{
		street:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		unit:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		city:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		zipCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		countryCode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Driver:{
		checkIns:"CheckIn",
		firstName:"String",
		idNumber:"String",
		lastName:"String",
		phone:"String",
		trailerNumber:"String",
		truckNumber:"String"
	},
	Query:{
		adminQuery:"AdminQuery",
		driverQuery:"DriverQuery"
	},
	DriverOrder:{
		checkIns:"CheckIn",
		loadAddress:"Address",
		pieces:"Int",
		plannedEndDate:"String",
		refId:"String",
		unloadAddress:"Address",
		weight:"Int"
	},
	Address:{
		city:"String",
		countryCode:"String",
		location:"Location",
		name:"String",
		street:"String",
		string:"String",
		unit:"String",
		zipCode:"String"
	},
	DriverQuery:{
		driverOrderByRefId:"DriverOrder",
		driverOrders:"DriverOrder"
	},
	CheckIn:{
		checkInType:"CheckInType",
		createdAt:"String",
		driver:"Driver",
		location:"Location",
		order:"Order"
	},
	Order:{
		checkIns:"CheckIn",
		createdAt:"String",
		driver:"Driver",
		loadAddress:"Address",
		pieces:"Int",
		plannedEndDate:"String",
		refId:"String",
		unloadAddress:"Address",
		weight:"Int"
	},
	Location:{
		latitude:"Float",
		longitude:"Float"
	},
	Mutation:{
		adminMutation:"AdminMutation",
		driverMutation:"DriverMutation"
	},
	DriverMutation:{
		createCheckIn:"String"
	},
	AdminQuery:{
		driverByPhone:"Driver",
		listDriver:"Driver",
		listOrders:"Order",
		lookUpAddress:"Address",
		orderByRefId:"Order"
	},
	AdminMutation:{
		createAddress:"String",
		createDriver:"String",
		createOrder:"String",
		removeAddress:"Boolean",
		removeDriver:"Boolean",
		removeOrder:"Boolean",
		updateAddress:"Boolean",
		updateDriver:"Boolean",
		updateOrder:"Boolean"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type NotUnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
}[keyof DST];

type ExtractUnions<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof SRC]: SRC[P] extends '__union' & infer R
    ? P extends keyof DST
      ? IsArray<R, DST[P] & { __typename: true }>
      : {}
    : never;
}[keyof SRC];

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? ExtractUnions<SRC, DST> &
      {
        [P in keyof Omit<Pick<SRC, NotUnionTypes<SRC, DST>>, '__typename'>]: DST[P] extends true
          ? SRC[P]
          : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };



type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
type SelectionFunction<V> = <T>(t: T | V) => T;
type fetchOptions = ArgsType<typeof fetch>;
type FetchFunction = (query: string, variables?: Record<string, any>) => Promise<any>;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;


export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/potus/graphql')