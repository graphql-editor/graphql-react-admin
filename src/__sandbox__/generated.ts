/* tslint:disable */
/* eslint-disable */

type ZEUS_INTERFACES = GraphQLTypes["Addressed"] | GraphQLTypes["Dated"]
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["CreateTenant"]: {
	name:string,
	ownerUsername:string,
	address:ValueTypes["AddressAddInput"],
	phone?:string
};
	["UpdateAddonSelect"]: {
	/** addon to choose */
	addonsToChoose?:ValueTypes["ObjectId"][],
	/** if multiple select is available please select this flag */
	multiple?:boolean,
	/** name of the addon select category. for example select sauce */
	name:string,
	/** name to change */
	newName?:string
};
	["CoordinatorUpdateInput"]: {
	person:ValueTypes["PersonUpdateInput"]
};
	["GoogleMapsLanguage"]:GoogleMapsLanguage;
	["DriverQuery"]: AliasType<{
historyOrders?: [{	period?:ValueTypes["TimeFilter"]},ValueTypes["Order"]],
	/** Info about current logged in driver */
	me?:ValueTypes["Driver"],
	/** Orders currently delivered by driver */
	myOrders?:ValueTypes["Order"],
mySchedule?: [{	timeFilter:ValueTypes["TimeFilter"]},ValueTypes["DriverWorkSchedule"]],
	/** List of active orders to take<br> */
	openOrders?:ValueTypes["Order"],
orderDetails?: [{	order:ValueTypes["OrderDetailsInput"]},ValueTypes["Order"]],
	supportDetails?:ValueTypes["SupportDetails"],
		__typename?: true
}>;
	["Vehicle"]: AliasType<{
	name?:true,
	registrationId?:true,
		__typename?: true
}>;
	["DriverMutation"]: AliasType<{
	/** Call this if driver is online */
	activate?:true,
changeOrderStatus?: [{	change:ValueTypes["ChangeOrderStatus"]},true],
	/** Call this to take driver offline */
	deactivate?:true,
lateForOrder?: [{	orderId:ValueTypes["ObjectId"],	minutesLate:number},true],
registerPush?: [{	push:ValueTypes["PushRegisterInput"]},true],
sendLocation?: [{	location:ValueTypes["LocationInput"]},true],
takeOrder?: [{	order:ValueTypes["TakeOrder"]},true],
		__typename?: true
}>;
	["UpdateVehicleNote"]: {
	/** date of note */
	date?:ValueTypes["Date"],
	/** course of the vehicle at the moment */
	course?:number,
	note?:string,
	vehicleName:string
};
	["OrderAddInput"]: {
	extraDetails?:string,
	/** Specify payment type */
	payment:ValueTypes["PaymentType"],
	/** contactless delivery */
	contactLess?:boolean,
	/** Big order package */
	bigOrder?:boolean,
	/** Restaurant owner username */
	restaurant:string,
	address:ValueTypes["AddressAddInput"],
	readyAt?:ValueTypes["Date"],
	total:number,
	/** Number to the client */
	clientPhoneNumber?:string,
	deliveryOnHour?:boolean
};
	["Address"]: AliasType<{
	city?:true,
	country?:true,
	flat?:true,
	location?:ValueTypes["PureLocation"],
	street?:true,
	unit?:true,
		__typename?: true
}>;
	/** Main thing here. Order is responsible for all the data about it */
["Order"]: AliasType<{
	address?:ValueTypes["Address"],
	/** the order is bigger than usually */
	bigOrder?:true,
	/** Number to the client */
	clientPhoneNumber?:true,
	/** Delivery is left in front of the door. */
	contactLess?:true,
	createdAt?:true,
	/** Delivery should be made on certain hour and is received before */
	deliveryOnHour?:true,
	/** price for the delivery paid by restaurant to the tenant */
	deliveryPrice?:true,
	/** Distance from client to restaurant */
	distance?:true,
	/** Driver delivering order */
	driver?:ValueTypes["Driver"],
	/** Time driver arrives to take order from restaurant */
	driverArrives?:true,
	/** determines if driver is late */
	driverLate?:true,
	/** extra details of an order */
	extraDetails?:true,
	id?:true,
	payment?:true,
	/** Time at restaurant will be ready to give the order to driver */
	readyAt?:true,
	restaurant?:ValueTypes["Restaurant"],
	/** If the order is settled there should be admin user owner username here if not it should remain empty */
	settled?:true,
	status?:true,
	/** Time needed to go from restaurant to client location */
	time?:true,
	total?:true,
		__typename?: true
}>;
	["VehicleNote"]: AliasType<{
	/** course of the vehicle at the moment */
	course?:true,
	/** date of note */
	date?:true,
	/** describe what happened with vehicle at this date */
	note?:true,
	/** vehicle note is about */
	vehicle?:ValueTypes["Vehicle"],
		__typename?: true
}>;
	["CreateMenu"]: {
	/** Menu name */
	name:string
};
	["CreateDriverWorkSchedule"]: {
	end:string,
	date:string,
	start:string
};
	["CoordinatorAddInput"]: {
	person:ValueTypes["PersonAddInput"],
	ownerUsername:string
};
	["ForceDriverAssign"]: {
	orderId:ValueTypes["ObjectId"],
	/** Driver owner username */
	driver:string
};
	["OrderDetailsInput"]: {
	id:ValueTypes["ObjectId"]
};
	["DriverWorkSchedule"]: AliasType<{
	date?:true,
	driver?:ValueTypes["Driver"],
	end?:true,
	start?:true,
		__typename?: true
}>;
	["AdminOrderFilter"]: {
	payment?:ValueTypes["PaymentType"],
	/** Period */
	period?:ValueTypes["TimeFilter"],
	/** restaurant owner username */
	restaurant?:string,
	/** driver owner username */
	driver?:string,
	status?:ValueTypes["OrderStatus"][]
};
	["RestaurantMutation"]: AliasType<{
addOrder?: [{	order:ValueTypes["RestaurantAddOrder"]},true],
authoriseOrder?: [{	order:ValueTypes["OrderDetailsInput"]},true],
cancelOrder?: [{	order:ValueTypes["OrderDetailsInput"]},true],
	menu?:ValueTypes["MenuMutation"],
setOpeningHours?: [{	openingHours:ValueTypes["UpdateOpeningHours"]},true],
		__typename?: true
}>;
	["CreateDishCategory"]: {
	/** Name as seen in the menu */
	name:string
};
	["CreateDish"]: {
	/** Name as seen in the menu */
	name:string,
	/** Price in smallest currency available unit */
	price:number
};
	["UserBasicData"]: {
	username:string,
	password:string
};
	/** Support details of tenant. Should be visible to drivers admins and restaurants */
["SupportDetails"]: AliasType<{
	email?:true,
	phone?:true,
		__typename?: true
}>;
	/** Developer integrating with foodeli */
["Developer"]: AliasType<{
	/** key to be used inside headers of developer request for example
## Request
```
apiKey: j1248879rhr270
``` */
	apiKey?:true,
	/** Name of the developer integration */
	name?:true,
	ownerUsername?:true,
	/** Restaurants allowed to use this developer integration */
	restaurantsUsernames?:true,
		__typename?: true
}>;
	["AddressAddInput"]: {
	unit:string,
	flat?:string,
	street:string
};
	/** When Order status is changed it is registered in the database for further reading. */
["OrderStatusChange"]: AliasType<{
	createdAt?:true,
	location?:ValueTypes["PureLocation"],
	order?:ValueTypes["Order"],
	status?:true,
		__typename?: true
}>;
	/** Main type for Restaurant
## Primary key
As a primary key we will use user username */
["Restaurant"]: AliasType<{
	address?:ValueTypes["Address"],
	/** If the restaurant is archived this is the archiving date */
	archivedAt?:true,
	createdAt?:true,
	/** Fee restaurant have to pay for the delivery of an order */
	deliveryFee?:true,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee?:true,
	/** Determines if restaurant has account in foodeli system */
	hasAccount?:true,
	name?:true,
	open?:ValueTypes["OpeningHours"],
	/** Username of the owner and primary key */
	ownerUsername?:true,
	/** Fee paid by restaurant if driver has to wait for the order longer than 5 minutes */
	parkingFee?:true,
	phone?:true,
		__typename?: true
}>;
	["Mutation"]: AliasType<{
	/** Mutations for administrator of the whole system */
	owner?:ValueTypes["OwnerMutation"],
	/** entry point for mutations for every tenant<br> */
	tenant?:ValueTypes["TenantMutation"],
	/** User mutation actions like register etc... */
	users?:ValueTypes["UserMutation"],
		__typename?: true
}>;
	["CreateVehicle"]: {
	name:string,
	registrationId:string
};
	["PublicQuery"]: AliasType<{
suggestAddress?: [{	/** Google maps params as described [here](https://github.com/googlemaps/google-maps-services-js)  */
	maps:ValueTypes["GoogleMapsParams"]},true],
	tenants?:ValueTypes["TenantInfo"],
		__typename?: true
}>;
	["Coordinator"]: AliasType<{
	ownerUsername?:true,
	person?:ValueTypes["Person"],
		__typename?: true
}>;
	["CreateAddon"]: {
	/** Price in smallest currency available unit */
	price:number,
	/** Name as seen in the menu */
	name:string
};
	["SetDeveloperRestaurants"]: {
	ownerUsernames:string[],
	/** unique name of the developer added by admin */
	name:string
};
	["OrderUpdateInput"]: {
	restaurant?:string,
	address?:ValueTypes["AddressUpdateInput"],
	extraDetails?:string,
	status?:ValueTypes["OrderStatus"],
	settled?:string,
	payment?:ValueTypes["PaymentType"],
	/** Number to the client */
	clientPhoneNumber?:string,
	driverArrives?:ValueTypes["Date"],
	deliveryOnHour?:boolean,
	contactLess?:boolean,
	id:ValueTypes["ObjectId"],
	total?:number,
	readyAt?:string,
	bigOrder?:boolean,
	driver?:string
};
	["Week"]:Week;
	/** Reset password details */
["ResetPassword"]: {
	/** token received from email */
	token:string,
	/** New password for the user */
	newPassword:string
};
	["PersonAddInput"]: {
	firstName:string,
	phone:string,
	lastName:string,
	/** extra details */
	details?:string,
	address?:ValueTypes["AddressAddInput"]
};
	["Query"]: AliasType<{
	/** manage access */
	access?:ValueTypes["AccessQuery"],
	owner?:ValueTypes["OwnerQuery"],
	public?:ValueTypes["PublicQuery"],
	/** entry point for queries for every tenant<br> */
	tenant?:ValueTypes["TenantQuery"],
	/** User actions here */
	users?:ValueTypes["UserQuery"],
		__typename?: true
}>;
	["AdminQuery"]: AliasType<{
coordinator?: [{	ownerUsernameInput:ValueTypes["OwnerUsernameInput"]},ValueTypes["Coordinator"]],
driver?: [{	driver:ValueTypes["OwnerUsernameInput"]},ValueTypes["Driver"]],
	listCoordinators?:ValueTypes["Coordinator"],
	/** list added developer integrations */
	listDevelopers?:ValueTypes["Developer"],
listDrivers?: [{	userFilter?:ValueTypes["UserActivityFilter"]},ValueTypes["Driver"]],
listRestaurants?: [{	userFilter?:ValueTypes["UserActivityFilter"]},ValueTypes["Restaurant"]],
	listVehicleNotes?:ValueTypes["VehicleNote"],
	listVehicles?:ValueTypes["Vehicle"],
order?: [{	order:ValueTypes["OrderDetailsInput"]},ValueTypes["Order"]],
orders?: [{	filter?:ValueTypes["AdminOrderFilter"]},ValueTypes["Order"]],
restaurant?: [{	restaurant:ValueTypes["OwnerUsernameInput"]},ValueTypes["Restaurant"]],
schedules?: [{	timeFilter:ValueTypes["TimeFilter"]},ValueTypes["DriverWorkSchedule"]],
	supportDetails?:ValueTypes["SupportDetails"],
		__typename?: true
}>;
	/** Developer queries */
["DeveloperQuery"]: AliasType<{
orderById?: [{	order:ValueTypes["OrderDetailsInput"]},ValueTypes["Order"]],
orders?: [{	filter?:ValueTypes["DeveloperOrderFilter"]},ValueTypes["DeveloperOrder"]],
	restaurants?:ValueTypes["DeveloperRestaurant"],
		__typename?: true
}>;
	/** Menu of the restaurant */
["Menu"]: AliasType<{
	/** All categories in the menu */
	categories?:ValueTypes["DishCategory"],
	/** All available Addons */
	listAddon?:ValueTypes["Addon"],
	/** All available addon selections so you can reuse */
	listAddonSelect?:ValueTypes["AddonSelect"],
	/** List all dishes from the menu */
	listDishes?:ValueTypes["Dish"],
	/** Menu name */
	name?:true,
		__typename?: true
}>;
	["CreateDeveloper"]: {
	name:string,
	ownerUsername:string
};
	["CreateVehicleNote"]: {
	/** course of the vehicle at the moment */
	course:number,
	note:string,
	vehicleName:string,
	/** date of note */
	date:ValueTypes["Date"]
};
	["TenantBaseMutation"]: AliasType<{
changeRadius?: [{	/** Radius in meters */
	radius:number},true],
		__typename?: true
}>;
	["Addressed"]:AliasType<{
		address?:ValueTypes["Address"];
		['...on Order']?: Omit<ValueTypes["Order"],keyof ValueTypes["Addressed"]>;
		['...on Restaurant']?: Omit<ValueTypes["Restaurant"],keyof ValueTypes["Addressed"]>;
		['...on DeveloperRestaurant']?: Omit<ValueTypes["DeveloperRestaurant"],keyof ValueTypes["Addressed"]>;
		__typename?: true
}>;
	["OwnerUsernameInput"]: {
	ownerUsername:string
};
	/** Details of the restaurant visible to developer */
["DeveloperRestaurant"]: AliasType<{
	address?:ValueTypes["Address"],
	name?:true,
	open?:ValueTypes["OpeningHours"],
	/** Username of the owner and primary key */
	ownerUsername?:true,
	phone?:true,
		__typename?: true
}>;
	/** Base Unit in the menu */
["Dish"]: AliasType<{
	/** Available addon selections on this dish */
	addonSelections?:ValueTypes["AddonSelect"],
	/** Categories this dish exist in */
	categories?:ValueTypes["DishCategory"],
	/** Name as seen in the menu */
	name?:true,
	/** Price in smallest currency available unit */
	price?:true,
		__typename?: true
}>;
	/** Addon representing single selection on dish. For example if you have pizza you have 3 options of dough:
* thin
* pan thick.
* italian */
["AddonSelect"]: AliasType<{
	/** addon to choose */
	addonsToChoose?:ValueTypes["Addon"],
	id?:true,
	/** if multiple select is available please select this flag */
	multiple?:true,
	/** name of the addon select category. for example select sauce */
	name?:true,
		__typename?: true
}>;
	["PersonUpdateInput"]: {
	phone?:string,
	lastName?:string,
	/** extra details */
	details?:string,
	address?:ValueTypes["AddressUpdateInput"],
	firstName?:string
};
	/** Location without creation date */
["PureLocation"]: AliasType<{
	latitude?:true,
	longitude?:true,
		__typename?: true
}>;
	/** All queries for tenant and members<br> */
["TenantQuery"]: AliasType<{
	admin?:ValueTypes["AdminQuery"],
	/** internal developer query */
	developer?:ValueTypes["DeveloperQuery"],
	driver?:ValueTypes["DriverQuery"],
	restaurant?:ValueTypes["RestaurantQuery"],
	/** internal tenant query */
	tenant?:ValueTypes["TenantBaseQuery"],
		__typename?: true
}>;
	["LocationData"]: AliasType<{
	createdAt?:true,
	latitude?:true,
	longitude?:true,
		__typename?: true
}>;
	/** Order as visible for developer integration */
["DeveloperOrder"]: AliasType<{
	address?:ValueTypes["Address"],
	/** the order is bigger than usually */
	bigOrder?:true,
	/** Delivery is left in front of the door. */
	contactLess?:true,
	createdAt?:true,
	/** determines if driver is late */
	driverLate?:true,
	/** extra details of an order */
	extraDetails?:true,
	id?:true,
	payment?:true,
	restaurant?:ValueTypes["DeveloperRestaurant"],
	status?:true,
		__typename?: true
}>;
	["Addon"]: AliasType<{
	/** Name as seen in the menu */
	name?:true,
	/** Price in smallest currency available unit */
	price?:true,
		__typename?: true
}>;
	["AddressUpdateInput"]: {
	street:string,
	unit:string,
	flat?:string
};
	["UpdateAddon"]: {
	/** Price in smallest currency available unit */
	price?:number,
	/** Name as seen in the menu */
	name:string,
	/** Name to replace */
	newName?:string
};
	["RestaurantUpdateInput"]: {
	phone?:string,
	address?:ValueTypes["AddressUpdateInput"],
	deliveryFee?:number,
	ownerUsername:string,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee?:number,
	parkingFee?:number,
	name?:string
};
	["GoogleMapsParams"]: {
	/** radius around location */
	radius?:number,
	/** Language of the response */
	language?:ValueTypes["GoogleMapsLanguage"],
	/** location to search around */
	location?:string,
	/** query input to search */
	input:string
};
	["RestaurantAddOrder"]: {
	/** Number to the client */
	clientPhoneNumber?:string,
	total:number,
	extraDetails?:string,
	/** Specify payment type */
	payment:ValueTypes["PaymentType"],
	/** Big order package */
	bigOrder?:boolean,
	deliveryOnHour?:boolean,
	address:ValueTypes["AddressAddInput"],
	/** When the order will be ready */
	readyIn:number,
	/** contactless delivery */
	contactLess?:boolean
};
	["RemoveVehicle"]: {
	name:string
};
	["PushRegisterInput"]: {
	pushToken:string,
	platform:ValueTypes["Platform"]
};
	["Dated"]:AliasType<{
		createdAt?:true;
		['...on Order']?: Omit<ValueTypes["Order"],keyof ValueTypes["Dated"]>;
		['...on OrderStatusChange']?: Omit<ValueTypes["OrderStatusChange"],keyof ValueTypes["Dated"]>;
		['...on Restaurant']?: Omit<ValueTypes["Restaurant"],keyof ValueTypes["Dated"]>;
		['...on Driver']?: Omit<ValueTypes["Driver"],keyof ValueTypes["Dated"]>;
		__typename?: true
}>;
	["PaymentType"]:PaymentType;
	["UpdateOpeningHours"]: {
	days:ValueTypes["UpdateDay"][]
};
	["UpdateVehicle"]: {
	/** Get vehicle to update name */
	registrationId:string,
	name?:string
};
	["OwnerReportsQuery"]: AliasType<{
ownerOrderReport?: [{	timeFilter:ValueTypes["TimeFilter"]},ValueTypes["OwnerOrderReport"]],
		__typename?: true
}>;
	/** All mutations of users system */
["UserMutation"]: AliasType<{
changePassword?: [{	changePassword:ValueTypes["ChangePassword"]},ValueTypes["LoggedInData"]],
forgotPassword?: [{	username:string},true],
makeAdmin?: [{	/** username of admin user<br> */
	username:string},true],
register?: [{	user:ValueTypes["UserBasicData"]},ValueTypes["LoggedInData"]],
resetPassword?: [{	reset:ValueTypes["ResetPassword"]},true],
		__typename?: true
}>;
	["ChangePassword"]: {
	password:string,
	newPassword:string
};
	["Platform"]:Platform;
	["TenantBaseQuery"]: AliasType<{
	me?:ValueTypes["Tenant"],
		__typename?: true
}>;
	["UpdateDish"]: {
	/** Name as seen in the menu */
	name:string,
	/** changeName */
	newName:string,
	/** Price in smallest currency available unit */
	price?:number
};
	/** Internal input for update day */
["UpdateDay"]: {
	from:string,
	to:string,
	day:ValueTypes["Week"]
};
	/** Universal input for filtering users( Drivers, Restaurants, Tenants ) based on their status in system */
["UserActivityFilter"]: {
	isArchived?:ValueTypes["isArchived"],
	hasAccount?:boolean
};
	["TimeFilter"]: {
	from:ValueTypes["Date"],
	to?:ValueTypes["Date"]
};
	["Date"]:unknown;
	["OwnerOrderReport"]: AliasType<{
	createdAt?:true,
	tenantName?:true,
		__typename?: true
}>;
	["LoggedInData"]: AliasType<{
	token?:true,
		__typename?: true
}>;
	["DeveloperDetails"]: {
	name:string
};
	/** Publicly available info about restaurant */
["RestaurantInfo"]: AliasType<{
	address?:ValueTypes["Address"],
	name?:true,
	phone?:true,
		__typename?: true
}>;
	["MenuQuery"]: AliasType<{
	listMenu?:ValueTypes["Menu"],
		__typename?: true
}>;
	["DetailsDriverWorkSchedule"]: {
	ownerUsernameInput:ValueTypes["OwnerUsernameInput"],
	date:string
};
	["ChangeOrderStatus"]: {
	location?:ValueTypes["LocationInput"],
	status:ValueTypes["OrderStatus"],
	orderId:ValueTypes["ObjectId"]
};
	["LocationInput"]: {
	latitude:number,
	longitude:number
};
	["AdminMutation"]: AliasType<{
addCoordinator?: [{	coordinatorAddInput:ValueTypes["CoordinatorAddInput"]},true],
addDeveloper?: [{	developer:ValueTypes["CreateDeveloper"]},true],
addDriver?: [{	driver:ValueTypes["DriverAddInput"]},true],
addDriverWorkSchedule?: [{	createDriverWorkSchedule:ValueTypes["CreateDriverWorkSchedule"]},true],
addOrder?: [{	order:ValueTypes["OrderAddInput"]},true],
addRestaurant?: [{	/** restaurant to be added */
	restaurant:ValueTypes["RestaurantAddInput"]},true],
addVehicle?: [{	vehicle:ValueTypes["CreateVehicle"]},true],
addVehicleNote?: [{	vehicleNote:ValueTypes["CreateVehicleNote"]},true],
archiveDriver?: [{	driver:ValueTypes["OwnerUsernameInput"]},true],
archiveRestaurant?: [{	restaurant:ValueTypes["OwnerUsernameInput"]},true],
assignDriverToOrder?: [{	/** Provide driver and order id */
	assign:ValueTypes["ForceDriverAssign"]},true],
removeCoordinator?: [{	ownerUsernameInput:ValueTypes["OwnerUsernameInput"]},true],
removeDeveloper?: [{	developer:ValueTypes["DeveloperDetails"]},true],
removeDriver?: [{	driver:ValueTypes["OwnerUsernameInput"]},true],
removeDriverWorkSchedule?: [{	detailsDriverWorkSchedule:ValueTypes["DetailsDriverWorkSchedule"]},true],
removeOrder?: [{	order:ValueTypes["OrderDetailsInput"]},true],
removeRestaurant?: [{	restaurant:ValueTypes["OwnerUsernameInput"]},true],
removeVehicle?: [{	vehicle:ValueTypes["RemoveVehicle"]},true],
removeVehicleNote?: [{	vehicleNote:ValueTypes["RemoveVehicleNote"]},true],
setDeveloperRestaurants?: [{	restaurants:ValueTypes["SetDeveloperRestaurants"]},true],
setSupportDetails?: [{	updateSupportDetails:ValueTypes["UpdateSupportDetails"]},true],
settleOrder?: [{	order:ValueTypes["OrderDetailsInput"]},true],
unArchiveDriver?: [{	driver:ValueTypes["OwnerUsernameInput"]},true],
unArchiveRestaurant?: [{	restaurant:ValueTypes["OwnerUsernameInput"]},true],
updateCoordinator?: [{	coordinatorUpdateInput:ValueTypes["CoordinatorUpdateInput"],	ownerUsernameInput:ValueTypes["OwnerUsernameInput"]},true],
updateDriver?: [{	driver:ValueTypes["DriverUpdateInput"]},true],
updateDriverWorkSchedule?: [{	updateDriverWorkSchedule:ValueTypes["UpdateDriverWorkSchedule"],	detailsDriverWorkSchedule:ValueTypes["DetailsDriverWorkSchedule"]},true],
updateOrder?: [{	order:ValueTypes["OrderUpdateInput"]},true],
updateRestaurant?: [{	restaurant:ValueTypes["RestaurantUpdateInput"]},true],
updateVehicle?: [{	vehicle:ValueTypes["UpdateVehicle"]},true],
updateVehicleNote?: [{	vehicleNote:ValueTypes["UpdateVehicleNote"]},true],
		__typename?: true
}>;
	/** Queries for the administrator of the whole system */
["OwnerQuery"]: AliasType<{
	reports?:ValueTypes["OwnerReportsQuery"],
tenants?: [{	userFilter?:ValueTypes["UserActivityFilter"]},ValueTypes["Tenant"]],
		__typename?: true
}>;
	/** All queries of users system */
["UserQuery"]: AliasType<{
	/** Check if logged in user is admin<br> */
	isAdmin?:true,
	/** Check if there is admin already */
	isAdminClaimPossible?:true,
login?: [{	user:ValueTypes["UserBasicData"]},ValueTypes["LoggedInData"]],
		__typename?: true
}>;
	["DeveloperOrderFilter"]: {
	/** Period */
	period?:ValueTypes["TimeFilter"],
	/** restaurant owner username */
	restaurant?:string,
	status?:ValueTypes["OrderStatus"][],
	payment?:ValueTypes["PaymentType"]
};
	/** Category of dish containing relevenat dishes. On dish must exist in one or more categories */
["DishCategory"]: AliasType<{
	/** All dishes in category */
	dishes?:ValueTypes["Dish"],
	/** Name as seen in the menu */
	name?:true,
		__typename?: true
}>;
	["UpdateTenant"]: {
	name?:string,
	ownerUsername:string,
	address?:ValueTypes["AddressUpdateInput"],
	phone?:string
};
	/** Universal Person Credentials */
["Person"]: AliasType<{
	/** person address */
	address?:ValueTypes["Address"],
	/** extra details */
	details?:true,
	firstName?:true,
	lastName?:true,
	phone?:true,
		__typename?: true
}>;
	["RestaurantQuery"]: AliasType<{
	checkOrderLoad?:true,
estimateDelivery?: [{	address:ValueTypes["AddressAddInput"]},ValueTypes["DeliveryCostResponse"]],
	/** Returns logged in restaurant details */
	me?:ValueTypes["Restaurant"],
	menu?:ValueTypes["MenuQuery"],
openOrders?: [{	period:ValueTypes["TimeFilter"]},ValueTypes["Order"]],
orderDetails?: [{	order:ValueTypes["OrderDetailsInput"]},ValueTypes["Order"]],
orderStatusHistory?: [{	order:ValueTypes["OrderDetailsInput"]},ValueTypes["OrderStatusChange"]],
	supportDetails?:ValueTypes["SupportDetails"],
		__typename?: true
}>;
	/** Query the access of the user to the app */
["AccessQuery"]: AliasType<{
	/** Return roles of the user */
	roles?:true,
		__typename?: true
}>;
	["ObjectId"]:unknown;
	["OpeningHours"]: AliasType<{
	day?:true,
	from?:true,
	to?:true,
		__typename?: true
}>;
	/** Developer mutations */
["DeveloperMutation"]: AliasType<{
addOrder?: [{	order:ValueTypes["OrderAddInput"]},true],
		__typename?: true
}>;
	/** All roles available around the system */
["Role"]:Role;
	/** Current system load.  */
["OrderLoad"]:OrderLoad;
	/** All mutations for tenant and members<br> */
["TenantMutation"]: AliasType<{
	admin?:ValueTypes["AdminMutation"],
	/** internal developer mutation */
	developer?:ValueTypes["DeveloperMutation"],
	driver?:ValueTypes["DriverMutation"],
	restaurant?:ValueTypes["RestaurantMutation"],
	/** Internal tenant mutations */
	tenant?:ValueTypes["TenantBaseMutation"],
		__typename?: true
}>;
	/** Type used for displaying the publicly available tenant info */
["TenantInfo"]: AliasType<{
	name?:true,
	restaurants?:ValueTypes["RestaurantInfo"],
		__typename?: true
}>;
	["CreateAddonSelect"]: {
	/** if multiple select is available please select this flag */
	multiple?:boolean,
	/** name of the addon select category. for example select sauce */
	name:string
};
	["RemoveMenu"]: {
	/** Menu name */
	name:string
};
	["RestaurantAddInput"]: {
	address:ValueTypes["AddressAddInput"],
	deliveryFee:number,
	ownerUsername:string,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee:number,
	parkingFee:number,
	name:string,
	phone:string
};
	/** Tenant of the foodeli app */
["Tenant"]: AliasType<{
	address?:ValueTypes["Address"],
	/** Checks if tenant already has user account */
	hasAccount?:true,
	location?:ValueTypes["PureLocation"],
	name?:true,
	/** Unique username of the owner. */
	ownerUsername?:true,
	phone?:true,
	/** Tenant radius for base delivery fee in meters */
	radius?:true,
		__typename?: true
}>;
	["MenuMutation"]: AliasType<{
addAddon?: [{	addon:ValueTypes["CreateAddon"]},true],
addAddonSelect?: [{	addonSelect:ValueTypes["CreateAddonSelect"]},true],
addCategory?: [{	category:ValueTypes["CreateDishCategory"]},true],
addDish?: [{	dish:ValueTypes["CreateDish"]},true],
addMenu?: [{	menu:ValueTypes["CreateMenu"]},true],
removeAddon?: [{	name:string},true],
removeAddonSelect?: [{	name:string},true],
removeCategory?: [{	name:string},true],
removeDish?: [{	name:string},true],
removeMenu?: [{	menu:ValueTypes["RemoveMenu"]},true],
updateAddon?: [{	addon:ValueTypes["UpdateAddon"]},true],
updateAddonSelect?: [{	addonSelect:ValueTypes["UpdateAddonSelect"]},true],
updateCategory?: [{	category:ValueTypes["CreateDishCategory"]},true],
updateDish?: [{	dish:ValueTypes["UpdateDish"]},true],
updateMenu?: [{	menu:ValueTypes["UpdateMenu"]},true],
		__typename?: true
}>;
	["UpdateDriverWorkSchedule"]: {
	date?:string,
	start?:string,
	end?:string
};
	["DriverAddInput"]: {
	deliveryRate?:number,
	PESEL?:string,
	credentials:ValueTypes["PersonAddInput"],
	ownerUsername:string
};
	["RemoveVehicleNote"]: {
	vehicleName:string
};
	["OrderStatus"]:OrderStatus;
	["Driver"]: AliasType<{
	PESEL?:true,
	/** Is driver working now */
	active?:true,
	/** If the driver is archived this is the archiving date */
	archivedAt?:true,
	createdAt?:true,
	credentials?:ValueTypes["Person"],
	deliveryRate?:true,
	/** Determines if driver has account in foodeli system */
	hasAccount?:true,
	lastLocation?:ValueTypes["LocationData"],
locations?: [{	period:ValueTypes["TimeFilter"]},ValueTypes["LocationData"]],
	ownerUsername?:true,
	pushToken?:true,
		__typename?: true
}>;
	["OwnerMutation"]: AliasType<{
addTenant?: [{	tenant:ValueTypes["CreateTenant"]},true],
editTenant?: [{	tenant:ValueTypes["UpdateTenant"]},true],
removeTenant?: [{	tenant:ValueTypes["OwnerUsernameInput"]},true],
		__typename?: true
}>;
	["UpdateMenu"]: {
	/** Menu name */
	name:string,
	/** name to change */
	newName?:string
};
	["TakeOrder"]: {
	location:ValueTypes["LocationInput"],
	/** driver will take order X minutes from now */
	minutesFromNow:number,
	orderId:ValueTypes["ObjectId"]
};
	["isArchived"]: {
	archived:boolean
};
	/** Delivery cost response based on address<br> */
["DeliveryCostResponse"]: AliasType<{
	canBeDelivered?:true,
	cost?:true,
		__typename?: true
}>;
	["UpdateSupportDetails"]: {
	phone?:string,
	email?:string
};
	["DriverUpdateInput"]: {
	deliveryRate?:number,
	PESEL?:string,
	credentials?:ValueTypes["PersonUpdateInput"],
	ownerUsername:string
}
  }

export type ModelTypes = {
    ["CreateTenant"]: GraphQLTypes["CreateTenant"];
	["UpdateAddonSelect"]: GraphQLTypes["UpdateAddonSelect"];
	["CoordinatorUpdateInput"]: GraphQLTypes["CoordinatorUpdateInput"];
	["GoogleMapsLanguage"]: GraphQLTypes["GoogleMapsLanguage"];
	["DriverQuery"]: {
		/** History of all driver orders */
	historyOrders:ModelTypes["Order"][],
	/** Info about current logged in driver */
	me:ModelTypes["Driver"],
	/** Orders currently delivered by driver */
	myOrders:ModelTypes["Order"][],
	mySchedule:ModelTypes["DriverWorkSchedule"][],
	/** List of active orders to take<br> */
	openOrders:ModelTypes["Order"][],
	/** Get details of an order */
	orderDetails:ModelTypes["Order"],
	supportDetails:ModelTypes["SupportDetails"]
};
	["Vehicle"]: {
		name:string,
	registrationId:string
};
	["DriverMutation"]: {
		/** Call this if driver is online */
	activate?:boolean,
	/** change status of active order */
	changeOrderStatus?:boolean,
	/** Call this to take driver offline */
	deactivate?:boolean,
	/** Driver declares they will be late for order */
	lateForOrder?:boolean,
	/** register for push notifications<br> */
	registerPush?:string,
	/** send current location */
	sendLocation?:boolean,
	/** take order from open orders<br> */
	takeOrder?:boolean
};
	["UpdateVehicleNote"]: GraphQLTypes["UpdateVehicleNote"];
	["OrderAddInput"]: GraphQLTypes["OrderAddInput"];
	["Address"]: {
		city?:string,
	country?:string,
	flat?:string,
	location?:ModelTypes["PureLocation"],
	street:string,
	unit:string
};
	/** Main thing here. Order is responsible for all the data about it */
["Order"]: {
		address:ModelTypes["Address"],
	/** the order is bigger than usually */
	bigOrder?:boolean,
	/** Number to the client */
	clientPhoneNumber?:string,
	/** Delivery is left in front of the door. */
	contactLess?:boolean,
	createdAt:ModelTypes["Date"],
	/** Delivery should be made on certain hour and is received before */
	deliveryOnHour?:boolean,
	/** price for the delivery paid by restaurant to the tenant */
	deliveryPrice:number,
	/** Distance from client to restaurant */
	distance?:number,
	/** Driver delivering order */
	driver?:ModelTypes["Driver"],
	/** Time driver arrives to take order from restaurant */
	driverArrives?:ModelTypes["Date"],
	/** determines if driver is late */
	driverLate?:boolean,
	/** extra details of an order */
	extraDetails?:string,
	id:ModelTypes["ObjectId"],
	payment:ModelTypes["PaymentType"],
	/** Time at restaurant will be ready to give the order to driver */
	readyAt?:ModelTypes["Date"],
	restaurant:ModelTypes["Restaurant"],
	/** If the order is settled there should be admin user owner username here if not it should remain empty */
	settled?:string,
	status:ModelTypes["OrderStatus"],
	/** Time needed to go from restaurant to client location */
	time?:number,
	total:number
};
	["VehicleNote"]: {
		/** course of the vehicle at the moment */
	course:number,
	/** date of note */
	date:ModelTypes["Date"],
	/** describe what happened with vehicle at this date */
	note:string,
	/** vehicle note is about */
	vehicle:ModelTypes["Vehicle"]
};
	["CreateMenu"]: GraphQLTypes["CreateMenu"];
	["CreateDriverWorkSchedule"]: GraphQLTypes["CreateDriverWorkSchedule"];
	["CoordinatorAddInput"]: GraphQLTypes["CoordinatorAddInput"];
	["ForceDriverAssign"]: GraphQLTypes["ForceDriverAssign"];
	["OrderDetailsInput"]: GraphQLTypes["OrderDetailsInput"];
	["DriverWorkSchedule"]: {
		date:string,
	driver:ModelTypes["Driver"],
	end:string,
	start:string
};
	["AdminOrderFilter"]: GraphQLTypes["AdminOrderFilter"];
	["RestaurantMutation"]: {
		addOrder?:boolean,
	authoriseOrder?:boolean,
	cancelOrder?:boolean,
	menu?:ModelTypes["MenuMutation"],
	setOpeningHours?:boolean
};
	["CreateDishCategory"]: GraphQLTypes["CreateDishCategory"];
	["CreateDish"]: GraphQLTypes["CreateDish"];
	["UserBasicData"]: GraphQLTypes["UserBasicData"];
	/** Support details of tenant. Should be visible to drivers admins and restaurants */
["SupportDetails"]: {
		email?:string,
	phone?:string
};
	/** Developer integrating with foodeli */
["Developer"]: {
		/** key to be used inside headers of developer request for example
## Request
```
apiKey: j1248879rhr270
``` */
	apiKey:string,
	/** Name of the developer integration */
	name:string,
	ownerUsername:string,
	/** Restaurants allowed to use this developer integration */
	restaurantsUsernames:string[]
};
	["AddressAddInput"]: GraphQLTypes["AddressAddInput"];
	/** When Order status is changed it is registered in the database for further reading. */
["OrderStatusChange"]: {
		createdAt:ModelTypes["Date"],
	location?:ModelTypes["PureLocation"],
	order:ModelTypes["Order"],
	status:ModelTypes["OrderStatus"]
};
	/** Main type for Restaurant
## Primary key
As a primary key we will use user username */
["Restaurant"]: {
		address:ModelTypes["Address"],
	/** If the restaurant is archived this is the archiving date */
	archivedAt?:ModelTypes["Date"],
	createdAt:ModelTypes["Date"],
	/** Fee restaurant have to pay for the delivery of an order */
	deliveryFee:number,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee:number,
	/** Determines if restaurant has account in foodeli system */
	hasAccount?:boolean,
	name:string,
	open:ModelTypes["OpeningHours"][],
	/** Username of the owner and primary key */
	ownerUsername:string,
	/** Fee paid by restaurant if driver has to wait for the order longer than 5 minutes */
	parkingFee:number,
	phone:string
};
	["Mutation"]: {
		/** Mutations for administrator of the whole system */
	owner?:ModelTypes["OwnerMutation"],
	/** entry point for mutations for every tenant<br> */
	tenant?:ModelTypes["TenantMutation"],
	/** User mutation actions like register etc... */
	users?:ModelTypes["UserMutation"]
};
	["CreateVehicle"]: GraphQLTypes["CreateVehicle"];
	["PublicQuery"]: {
		/** Query can only be runned by admins and restaurants */
	suggestAddress:string[],
	tenants:ModelTypes["TenantInfo"][]
};
	["Coordinator"]: {
		ownerUsername:string,
	person:ModelTypes["Person"]
};
	["CreateAddon"]: GraphQLTypes["CreateAddon"];
	["SetDeveloperRestaurants"]: GraphQLTypes["SetDeveloperRestaurants"];
	["OrderUpdateInput"]: GraphQLTypes["OrderUpdateInput"];
	["Week"]: GraphQLTypes["Week"];
	/** Reset password details */
["ResetPassword"]: GraphQLTypes["ResetPassword"];
	["PersonAddInput"]: GraphQLTypes["PersonAddInput"];
	["Query"]: {
		/** manage access */
	access?:ModelTypes["AccessQuery"],
	owner?:ModelTypes["OwnerQuery"],
	public?:ModelTypes["PublicQuery"],
	/** entry point for queries for every tenant<br> */
	tenant?:ModelTypes["TenantQuery"],
	/** User actions here */
	users?:ModelTypes["UserQuery"]
};
	["AdminQuery"]: {
		coordinator?:ModelTypes["Coordinator"],
	/** get single driver */
	driver?:ModelTypes["Driver"],
	listCoordinators:ModelTypes["Coordinator"][],
	/** list added developer integrations */
	listDevelopers:ModelTypes["Developer"][],
	listDrivers:ModelTypes["Driver"][],
	listRestaurants:ModelTypes["Restaurant"][],
	listVehicleNotes:ModelTypes["VehicleNote"][],
	listVehicles:ModelTypes["Vehicle"][],
	/** Get order details */
	order?:ModelTypes["Order"],
	orders:ModelTypes["Order"][],
	/** Get single restaurant */
	restaurant?:ModelTypes["Restaurant"],
	schedules:ModelTypes["DriverWorkSchedule"][],
	supportDetails:ModelTypes["SupportDetails"]
};
	/** Developer queries */
["DeveloperQuery"]: {
		orderById?:ModelTypes["Order"],
	/** Orders added by developer integration */
	orders:ModelTypes["DeveloperOrder"][],
	restaurants:ModelTypes["DeveloperRestaurant"][]
};
	/** Menu of the restaurant */
["Menu"]: {
		/** All categories in the menu */
	categories:ModelTypes["DishCategory"][],
	/** All available Addons */
	listAddon?:ModelTypes["Addon"][],
	/** All available addon selections so you can reuse */
	listAddonSelect?:ModelTypes["AddonSelect"][],
	/** List all dishes from the menu */
	listDishes?:ModelTypes["Dish"][],
	/** Menu name */
	name:string
};
	["CreateDeveloper"]: GraphQLTypes["CreateDeveloper"];
	["CreateVehicleNote"]: GraphQLTypes["CreateVehicleNote"];
	["TenantBaseMutation"]: {
		/** Change base radius of a tenant */
	changeRadius?:boolean
};
	["Addressed"]: ModelTypes["Order"] | ModelTypes["Restaurant"] | ModelTypes["DeveloperRestaurant"];
	["OwnerUsernameInput"]: GraphQLTypes["OwnerUsernameInput"];
	/** Details of the restaurant visible to developer */
["DeveloperRestaurant"]: {
		address:ModelTypes["Address"],
	name:string,
	open:ModelTypes["OpeningHours"][],
	/** Username of the owner and primary key */
	ownerUsername:string,
	phone:string
};
	/** Base Unit in the menu */
["Dish"]: {
		/** Available addon selections on this dish */
	addonSelections:ModelTypes["AddonSelect"][],
	/** Categories this dish exist in */
	categories:ModelTypes["DishCategory"][],
	/** Name as seen in the menu */
	name:string,
	/** Price in smallest currency available unit */
	price:number
};
	/** Addon representing single selection on dish. For example if you have pizza you have 3 options of dough:
* thin
* pan thick.
* italian */
["AddonSelect"]: {
		/** addon to choose */
	addonsToChoose:ModelTypes["Addon"][],
	id:ModelTypes["ObjectId"],
	/** if multiple select is available please select this flag */
	multiple?:boolean,
	/** name of the addon select category. for example select sauce */
	name:string
};
	["PersonUpdateInput"]: GraphQLTypes["PersonUpdateInput"];
	/** Location without creation date */
["PureLocation"]: {
		latitude:number,
	longitude:number
};
	/** All queries for tenant and members<br> */
["TenantQuery"]: {
		admin?:ModelTypes["AdminQuery"],
	/** internal developer query */
	developer?:ModelTypes["DeveloperQuery"],
	driver?:ModelTypes["DriverQuery"],
	restaurant?:ModelTypes["RestaurantQuery"],
	/** internal tenant query */
	tenant?:ModelTypes["TenantBaseQuery"]
};
	["LocationData"]: {
		createdAt:ModelTypes["Date"],
	latitude:number,
	longitude:number
};
	/** Order as visible for developer integration */
["DeveloperOrder"]: {
		address:ModelTypes["Address"],
	/** the order is bigger than usually */
	bigOrder?:boolean,
	/** Delivery is left in front of the door. */
	contactLess?:boolean,
	createdAt:ModelTypes["Date"],
	/** determines if driver is late */
	driverLate?:boolean,
	/** extra details of an order */
	extraDetails?:string,
	id:ModelTypes["ObjectId"],
	payment:ModelTypes["PaymentType"],
	restaurant:ModelTypes["DeveloperRestaurant"],
	status:ModelTypes["OrderStatus"]
};
	["Addon"]: {
		/** Name as seen in the menu */
	name:string,
	/** Price in smallest currency available unit */
	price:number
};
	["AddressUpdateInput"]: GraphQLTypes["AddressUpdateInput"];
	["UpdateAddon"]: GraphQLTypes["UpdateAddon"];
	["RestaurantUpdateInput"]: GraphQLTypes["RestaurantUpdateInput"];
	["GoogleMapsParams"]: GraphQLTypes["GoogleMapsParams"];
	["RestaurantAddOrder"]: GraphQLTypes["RestaurantAddOrder"];
	["RemoveVehicle"]: GraphQLTypes["RemoveVehicle"];
	["PushRegisterInput"]: GraphQLTypes["PushRegisterInput"];
	["Dated"]: ModelTypes["Order"] | ModelTypes["OrderStatusChange"] | ModelTypes["Restaurant"] | ModelTypes["Driver"];
	["PaymentType"]: GraphQLTypes["PaymentType"];
	["UpdateOpeningHours"]: GraphQLTypes["UpdateOpeningHours"];
	["UpdateVehicle"]: GraphQLTypes["UpdateVehicle"];
	["OwnerReportsQuery"]: {
		ownerOrderReport:ModelTypes["OwnerOrderReport"][]
};
	/** All mutations of users system */
["UserMutation"]: {
		changePassword:ModelTypes["LoggedInData"],
	forgotPassword?:boolean,
	/** Make user a superadmin on a first call. Then you need to be an admin to call this */
	makeAdmin?:boolean,
	/** Register a new user<br> */
	register?:ModelTypes["LoggedInData"],
	resetPassword?:boolean
};
	["ChangePassword"]: GraphQLTypes["ChangePassword"];
	["Platform"]: GraphQLTypes["Platform"];
	["TenantBaseQuery"]: {
		me:ModelTypes["Tenant"]
};
	["UpdateDish"]: GraphQLTypes["UpdateDish"];
	/** Internal input for update day */
["UpdateDay"]: GraphQLTypes["UpdateDay"];
	/** Universal input for filtering users( Drivers, Restaurants, Tenants ) based on their status in system */
["UserActivityFilter"]: GraphQLTypes["UserActivityFilter"];
	["TimeFilter"]: GraphQLTypes["TimeFilter"];
	["Date"]:any;
	["OwnerOrderReport"]: {
		createdAt:ModelTypes["Date"],
	tenantName:string
};
	["LoggedInData"]: {
		token?:string
};
	["DeveloperDetails"]: GraphQLTypes["DeveloperDetails"];
	/** Publicly available info about restaurant */
["RestaurantInfo"]: {
		address:ModelTypes["Address"],
	name:string,
	phone:string
};
	["MenuQuery"]: {
		listMenu?:ModelTypes["Menu"][]
};
	["DetailsDriverWorkSchedule"]: GraphQLTypes["DetailsDriverWorkSchedule"];
	["ChangeOrderStatus"]: GraphQLTypes["ChangeOrderStatus"];
	["LocationInput"]: GraphQLTypes["LocationInput"];
	["AdminMutation"]: {
		addCoordinator?:boolean,
	/** add developer integration
entry */
	addDeveloper?:boolean,
	addDriver?:boolean,
	addDriverWorkSchedule?:boolean,
	addOrder?:boolean,
	addRestaurant?:boolean,
	/** create vehicle in database */
	addVehicle?:boolean,
	/** create vehicle note in database */
	addVehicleNote?:boolean,
	/** archive the driver who is no longer served by the tenant */
	archiveDriver?:boolean,
	/** archive the restaurant which is no longer served by tenant */
	archiveRestaurant?:boolean,
	/** Force assign driver to existing order  */
	assignDriverToOrder?:boolean,
	removeCoordinator?:boolean,
	/** Remove developer entry */
	removeDeveloper?:boolean,
	removeDriver?:boolean,
	removeDriverWorkSchedule?:boolean,
	removeOrder?:boolean,
	removeRestaurant?:boolean,
	/** remove vehicle from database */
	removeVehicle?:boolean,
	/** remove vehicle note from database */
	removeVehicleNote?:boolean,
	setDeveloperRestaurants?:boolean,
	/** set support details singleton settings.  */
	setSupportDetails?:boolean,
	settleOrder?:boolean,
	unArchiveDriver?:boolean,
	unArchiveRestaurant?:boolean,
	updateCoordinator?:boolean,
	updateDriver?:boolean,
	updateDriverWorkSchedule?:boolean,
	updateOrder?:boolean,
	updateRestaurant?:boolean,
	/** update vehicle in database */
	updateVehicle?:boolean,
	/** update vehicle note in database */
	updateVehicleNote?:boolean
};
	/** Queries for the administrator of the whole system */
["OwnerQuery"]: {
		reports?:ModelTypes["OwnerReportsQuery"],
	tenants:ModelTypes["Tenant"][]
};
	/** All queries of users system */
["UserQuery"]: {
		/** Check if logged in user is admin<br> */
	isAdmin?:boolean,
	/** Check if there is admin already */
	isAdminClaimPossible?:boolean,
	/** Log user in */
	login?:ModelTypes["LoggedInData"]
};
	["DeveloperOrderFilter"]: GraphQLTypes["DeveloperOrderFilter"];
	/** Category of dish containing relevenat dishes. On dish must exist in one or more categories */
["DishCategory"]: {
		/** All dishes in category */
	dishes:ModelTypes["Dish"][],
	/** Name as seen in the menu */
	name:string
};
	["UpdateTenant"]: GraphQLTypes["UpdateTenant"];
	/** Universal Person Credentials */
["Person"]: {
		/** person address */
	address?:ModelTypes["Address"],
	/** extra details */
	details?:string,
	firstName:string,
	lastName:string,
	phone:string
};
	["RestaurantQuery"]: {
		checkOrderLoad:ModelTypes["OrderLoad"],
	/** Estimate the cost of delivery */
	estimateDelivery:ModelTypes["DeliveryCostResponse"],
	/** Returns logged in restaurant details */
	me:ModelTypes["Restaurant"],
	menu?:ModelTypes["MenuQuery"],
	/** Orders for preparation<br> */
	openOrders:ModelTypes["Order"][],
	/** Get details of an order */
	orderDetails:ModelTypes["Order"],
	/** Get all order status changes together with its location */
	orderStatusHistory:ModelTypes["OrderStatusChange"][],
	supportDetails:ModelTypes["SupportDetails"]
};
	/** Query the access of the user to the app */
["AccessQuery"]: {
		/** Return roles of the user */
	roles:ModelTypes["Role"][]
};
	["ObjectId"]:any;
	["OpeningHours"]: {
		day:ModelTypes["Week"],
	from:string,
	to:string
};
	/** Developer mutations */
["DeveloperMutation"]: {
		addOrder?:string
};
	/** All roles available around the system */
["Role"]: GraphQLTypes["Role"];
	/** Current system load.  */
["OrderLoad"]: GraphQLTypes["OrderLoad"];
	/** All mutations for tenant and members<br> */
["TenantMutation"]: {
		admin?:ModelTypes["AdminMutation"],
	/** internal developer mutation */
	developer?:ModelTypes["DeveloperMutation"],
	driver?:ModelTypes["DriverMutation"],
	restaurant?:ModelTypes["RestaurantMutation"],
	/** Internal tenant mutations */
	tenant?:ModelTypes["TenantBaseMutation"]
};
	/** Type used for displaying the publicly available tenant info */
["TenantInfo"]: {
		name:string,
	restaurants:ModelTypes["RestaurantInfo"][]
};
	["CreateAddonSelect"]: GraphQLTypes["CreateAddonSelect"];
	["RemoveMenu"]: GraphQLTypes["RemoveMenu"];
	["RestaurantAddInput"]: GraphQLTypes["RestaurantAddInput"];
	/** Tenant of the foodeli app */
["Tenant"]: {
		address:ModelTypes["Address"],
	/** Checks if tenant already has user account */
	hasAccount?:boolean,
	location:ModelTypes["PureLocation"],
	name:string,
	/** Unique username of the owner. */
	ownerUsername:string,
	phone?:string,
	/** Tenant radius for base delivery fee in meters */
	radius?:number
};
	["MenuMutation"]: {
		addAddon?:boolean,
	addAddonSelect?:boolean,
	addCategory?:boolean,
	addDish?:boolean,
	addMenu?:boolean,
	removeAddon?:boolean,
	removeAddonSelect?:boolean,
	removeCategory?:boolean,
	removeDish?:boolean,
	removeMenu?:boolean,
	updateAddon?:boolean,
	updateAddonSelect?:boolean,
	updateCategory?:boolean,
	updateDish?:boolean,
	updateMenu?:boolean
};
	["UpdateDriverWorkSchedule"]: GraphQLTypes["UpdateDriverWorkSchedule"];
	["DriverAddInput"]: GraphQLTypes["DriverAddInput"];
	["RemoveVehicleNote"]: GraphQLTypes["RemoveVehicleNote"];
	["OrderStatus"]: GraphQLTypes["OrderStatus"];
	["Driver"]: {
		PESEL?:string,
	/** Is driver working now */
	active?:boolean,
	/** If the driver is archived this is the archiving date */
	archivedAt?:ModelTypes["Date"],
	createdAt:ModelTypes["Date"],
	credentials:ModelTypes["Person"],
	deliveryRate:number,
	/** Determines if driver has account in foodeli system */
	hasAccount?:boolean,
	lastLocation?:ModelTypes["LocationData"],
	locations:ModelTypes["LocationData"][],
	ownerUsername:string,
	pushToken?:string
};
	["OwnerMutation"]: {
		addTenant?:boolean,
	editTenant?:boolean,
	removeTenant?:boolean
};
	["UpdateMenu"]: GraphQLTypes["UpdateMenu"];
	["TakeOrder"]: GraphQLTypes["TakeOrder"];
	["isArchived"]: GraphQLTypes["isArchived"];
	/** Delivery cost response based on address<br> */
["DeliveryCostResponse"]: {
		canBeDelivered:boolean,
	cost?:number
};
	["UpdateSupportDetails"]: GraphQLTypes["UpdateSupportDetails"];
	["DriverUpdateInput"]: GraphQLTypes["DriverUpdateInput"]
    }

export type GraphQLTypes = {
    ["CreateTenant"]: {
		name:string,
	ownerUsername:string,
	address:GraphQLTypes["AddressAddInput"],
	phone?:string
};
	["UpdateAddonSelect"]: {
		/** addon to choose */
	addonsToChoose?:GraphQLTypes["ObjectId"][],
	/** if multiple select is available please select this flag */
	multiple?:boolean,
	/** name of the addon select category. for example select sauce */
	name:string,
	/** name to change */
	newName?:string
};
	["CoordinatorUpdateInput"]: {
		person:GraphQLTypes["PersonUpdateInput"]
};
	["GoogleMapsLanguage"]: GoogleMapsLanguage;
	["DriverQuery"]: {
	__typename: "DriverQuery",
	/** History of all driver orders */
	historyOrders:GraphQLTypes["Order"][],
	/** Info about current logged in driver */
	me:GraphQLTypes["Driver"],
	/** Orders currently delivered by driver */
	myOrders:GraphQLTypes["Order"][],
	mySchedule:GraphQLTypes["DriverWorkSchedule"][],
	/** List of active orders to take<br> */
	openOrders:GraphQLTypes["Order"][],
	/** Get details of an order */
	orderDetails:GraphQLTypes["Order"],
	supportDetails:GraphQLTypes["SupportDetails"]
};
	["Vehicle"]: {
	__typename: "Vehicle",
	name:string,
	registrationId:string
};
	["DriverMutation"]: {
	__typename: "DriverMutation",
	/** Call this if driver is online */
	activate?:boolean,
	/** change status of active order */
	changeOrderStatus?:boolean,
	/** Call this to take driver offline */
	deactivate?:boolean,
	/** Driver declares they will be late for order */
	lateForOrder?:boolean,
	/** register for push notifications<br> */
	registerPush?:string,
	/** send current location */
	sendLocation?:boolean,
	/** take order from open orders<br> */
	takeOrder?:boolean
};
	["UpdateVehicleNote"]: {
		/** date of note */
	date?:GraphQLTypes["Date"],
	/** course of the vehicle at the moment */
	course?:number,
	note?:string,
	vehicleName:string
};
	["OrderAddInput"]: {
		extraDetails?:string,
	/** Specify payment type */
	payment:GraphQLTypes["PaymentType"],
	/** contactless delivery */
	contactLess?:boolean,
	/** Big order package */
	bigOrder?:boolean,
	/** Restaurant owner username */
	restaurant:string,
	address:GraphQLTypes["AddressAddInput"],
	readyAt?:GraphQLTypes["Date"],
	total:number,
	/** Number to the client */
	clientPhoneNumber?:string,
	deliveryOnHour?:boolean
};
	["Address"]: {
	__typename: "Address",
	city?:string,
	country?:string,
	flat?:string,
	location?:GraphQLTypes["PureLocation"],
	street:string,
	unit:string
};
	/** Main thing here. Order is responsible for all the data about it */
["Order"]: {
	__typename: "Order",
	address:GraphQLTypes["Address"],
	/** the order is bigger than usually */
	bigOrder?:boolean,
	/** Number to the client */
	clientPhoneNumber?:string,
	/** Delivery is left in front of the door. */
	contactLess?:boolean,
	createdAt:GraphQLTypes["Date"],
	/** Delivery should be made on certain hour and is received before */
	deliveryOnHour?:boolean,
	/** price for the delivery paid by restaurant to the tenant */
	deliveryPrice:number,
	/** Distance from client to restaurant */
	distance?:number,
	/** Driver delivering order */
	driver?:GraphQLTypes["Driver"],
	/** Time driver arrives to take order from restaurant */
	driverArrives?:GraphQLTypes["Date"],
	/** determines if driver is late */
	driverLate?:boolean,
	/** extra details of an order */
	extraDetails?:string,
	id:GraphQLTypes["ObjectId"],
	payment:GraphQLTypes["PaymentType"],
	/** Time at restaurant will be ready to give the order to driver */
	readyAt?:GraphQLTypes["Date"],
	restaurant:GraphQLTypes["Restaurant"],
	/** If the order is settled there should be admin user owner username here if not it should remain empty */
	settled?:string,
	status:GraphQLTypes["OrderStatus"],
	/** Time needed to go from restaurant to client location */
	time?:number,
	total:number
};
	["VehicleNote"]: {
	__typename: "VehicleNote",
	/** course of the vehicle at the moment */
	course:number,
	/** date of note */
	date:GraphQLTypes["Date"],
	/** describe what happened with vehicle at this date */
	note:string,
	/** vehicle note is about */
	vehicle:GraphQLTypes["Vehicle"]
};
	["CreateMenu"]: {
		/** Menu name */
	name:string
};
	["CreateDriverWorkSchedule"]: {
		end:string,
	date:string,
	start:string
};
	["CoordinatorAddInput"]: {
		person:GraphQLTypes["PersonAddInput"],
	ownerUsername:string
};
	["ForceDriverAssign"]: {
		orderId:GraphQLTypes["ObjectId"],
	/** Driver owner username */
	driver:string
};
	["OrderDetailsInput"]: {
		id:GraphQLTypes["ObjectId"]
};
	["DriverWorkSchedule"]: {
	__typename: "DriverWorkSchedule",
	date:string,
	driver:GraphQLTypes["Driver"],
	end:string,
	start:string
};
	["AdminOrderFilter"]: {
		payment?:GraphQLTypes["PaymentType"],
	/** Period */
	period?:GraphQLTypes["TimeFilter"],
	/** restaurant owner username */
	restaurant?:string,
	/** driver owner username */
	driver?:string,
	status?:GraphQLTypes["OrderStatus"][]
};
	["RestaurantMutation"]: {
	__typename: "RestaurantMutation",
	addOrder?:boolean,
	authoriseOrder?:boolean,
	cancelOrder?:boolean,
	menu?:GraphQLTypes["MenuMutation"],
	setOpeningHours?:boolean
};
	["CreateDishCategory"]: {
		/** Name as seen in the menu */
	name:string
};
	["CreateDish"]: {
		/** Name as seen in the menu */
	name:string,
	/** Price in smallest currency available unit */
	price:number
};
	["UserBasicData"]: {
		username:string,
	password:string
};
	/** Support details of tenant. Should be visible to drivers admins and restaurants */
["SupportDetails"]: {
	__typename: "SupportDetails",
	email?:string,
	phone?:string
};
	/** Developer integrating with foodeli */
["Developer"]: {
	__typename: "Developer",
	/** key to be used inside headers of developer request for example
## Request
```
apiKey: j1248879rhr270
``` */
	apiKey:string,
	/** Name of the developer integration */
	name:string,
	ownerUsername:string,
	/** Restaurants allowed to use this developer integration */
	restaurantsUsernames:string[]
};
	["AddressAddInput"]: {
		unit:string,
	flat?:string,
	street:string
};
	/** When Order status is changed it is registered in the database for further reading. */
["OrderStatusChange"]: {
	__typename: "OrderStatusChange",
	createdAt:GraphQLTypes["Date"],
	location?:GraphQLTypes["PureLocation"],
	order:GraphQLTypes["Order"],
	status:GraphQLTypes["OrderStatus"]
};
	/** Main type for Restaurant
## Primary key
As a primary key we will use user username */
["Restaurant"]: {
	__typename: "Restaurant",
	address:GraphQLTypes["Address"],
	/** If the restaurant is archived this is the archiving date */
	archivedAt?:GraphQLTypes["Date"],
	createdAt:GraphQLTypes["Date"],
	/** Fee restaurant have to pay for the delivery of an order */
	deliveryFee:number,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee:number,
	/** Determines if restaurant has account in foodeli system */
	hasAccount?:boolean,
	name:string,
	open:GraphQLTypes["OpeningHours"][],
	/** Username of the owner and primary key */
	ownerUsername:string,
	/** Fee paid by restaurant if driver has to wait for the order longer than 5 minutes */
	parkingFee:number,
	phone:string
};
	["Mutation"]: {
	__typename: "Mutation",
	/** Mutations for administrator of the whole system */
	owner?:GraphQLTypes["OwnerMutation"],
	/** entry point for mutations for every tenant<br> */
	tenant?:GraphQLTypes["TenantMutation"],
	/** User mutation actions like register etc... */
	users?:GraphQLTypes["UserMutation"]
};
	["CreateVehicle"]: {
		name:string,
	registrationId:string
};
	["PublicQuery"]: {
	__typename: "PublicQuery",
	/** Query can only be runned by admins and restaurants */
	suggestAddress:string[],
	tenants:GraphQLTypes["TenantInfo"][]
};
	["Coordinator"]: {
	__typename: "Coordinator",
	ownerUsername:string,
	person:GraphQLTypes["Person"]
};
	["CreateAddon"]: {
		/** Price in smallest currency available unit */
	price:number,
	/** Name as seen in the menu */
	name:string
};
	["SetDeveloperRestaurants"]: {
		ownerUsernames:string[],
	/** unique name of the developer added by admin */
	name:string
};
	["OrderUpdateInput"]: {
		restaurant?:string,
	address?:GraphQLTypes["AddressUpdateInput"],
	extraDetails?:string,
	status?:GraphQLTypes["OrderStatus"],
	settled?:string,
	payment?:GraphQLTypes["PaymentType"],
	/** Number to the client */
	clientPhoneNumber?:string,
	driverArrives?:GraphQLTypes["Date"],
	deliveryOnHour?:boolean,
	contactLess?:boolean,
	id:GraphQLTypes["ObjectId"],
	total?:number,
	readyAt?:string,
	bigOrder?:boolean,
	driver?:string
};
	["Week"]: Week;
	/** Reset password details */
["ResetPassword"]: {
		/** token received from email */
	token:string,
	/** New password for the user */
	newPassword:string
};
	["PersonAddInput"]: {
		firstName:string,
	phone:string,
	lastName:string,
	/** extra details */
	details?:string,
	address?:GraphQLTypes["AddressAddInput"]
};
	["Query"]: {
	__typename: "Query",
	/** manage access */
	access?:GraphQLTypes["AccessQuery"],
	owner?:GraphQLTypes["OwnerQuery"],
	public?:GraphQLTypes["PublicQuery"],
	/** entry point for queries for every tenant<br> */
	tenant?:GraphQLTypes["TenantQuery"],
	/** User actions here */
	users?:GraphQLTypes["UserQuery"]
};
	["AdminQuery"]: {
	__typename: "AdminQuery",
	coordinator?:GraphQLTypes["Coordinator"],
	/** get single driver */
	driver?:GraphQLTypes["Driver"],
	listCoordinators:GraphQLTypes["Coordinator"][],
	/** list added developer integrations */
	listDevelopers:GraphQLTypes["Developer"][],
	listDrivers:GraphQLTypes["Driver"][],
	listRestaurants:GraphQLTypes["Restaurant"][],
	listVehicleNotes:GraphQLTypes["VehicleNote"][],
	listVehicles:GraphQLTypes["Vehicle"][],
	/** Get order details */
	order?:GraphQLTypes["Order"],
	orders:GraphQLTypes["Order"][],
	/** Get single restaurant */
	restaurant?:GraphQLTypes["Restaurant"],
	schedules:GraphQLTypes["DriverWorkSchedule"][],
	supportDetails:GraphQLTypes["SupportDetails"]
};
	/** Developer queries */
["DeveloperQuery"]: {
	__typename: "DeveloperQuery",
	orderById?:GraphQLTypes["Order"],
	/** Orders added by developer integration */
	orders:GraphQLTypes["DeveloperOrder"][],
	restaurants:GraphQLTypes["DeveloperRestaurant"][]
};
	/** Menu of the restaurant */
["Menu"]: {
	__typename: "Menu",
	/** All categories in the menu */
	categories:GraphQLTypes["DishCategory"][],
	/** All available Addons */
	listAddon?:GraphQLTypes["Addon"][],
	/** All available addon selections so you can reuse */
	listAddonSelect?:GraphQLTypes["AddonSelect"][],
	/** List all dishes from the menu */
	listDishes?:GraphQLTypes["Dish"][],
	/** Menu name */
	name:string
};
	["CreateDeveloper"]: {
		name:string,
	ownerUsername:string
};
	["CreateVehicleNote"]: {
		/** course of the vehicle at the moment */
	course:number,
	note:string,
	vehicleName:string,
	/** date of note */
	date:GraphQLTypes["Date"]
};
	["TenantBaseMutation"]: {
	__typename: "TenantBaseMutation",
	/** Change base radius of a tenant */
	changeRadius?:boolean
};
	["Addressed"]: {
	__typename:"Order" | "Restaurant" | "DeveloperRestaurant"
	address:GraphQLTypes["Address"]
	['...on Order']: '__union' & GraphQLTypes["Order"];
	['...on Restaurant']: '__union' & GraphQLTypes["Restaurant"];
	['...on DeveloperRestaurant']: '__union' & GraphQLTypes["DeveloperRestaurant"];
};
	["OwnerUsernameInput"]: {
		ownerUsername:string
};
	/** Details of the restaurant visible to developer */
["DeveloperRestaurant"]: {
	__typename: "DeveloperRestaurant",
	address:GraphQLTypes["Address"],
	name:string,
	open:GraphQLTypes["OpeningHours"][],
	/** Username of the owner and primary key */
	ownerUsername:string,
	phone:string
};
	/** Base Unit in the menu */
["Dish"]: {
	__typename: "Dish",
	/** Available addon selections on this dish */
	addonSelections:GraphQLTypes["AddonSelect"][],
	/** Categories this dish exist in */
	categories:GraphQLTypes["DishCategory"][],
	/** Name as seen in the menu */
	name:string,
	/** Price in smallest currency available unit */
	price:number
};
	/** Addon representing single selection on dish. For example if you have pizza you have 3 options of dough:
* thin
* pan thick.
* italian */
["AddonSelect"]: {
	__typename: "AddonSelect",
	/** addon to choose */
	addonsToChoose:GraphQLTypes["Addon"][],
	id:GraphQLTypes["ObjectId"],
	/** if multiple select is available please select this flag */
	multiple?:boolean,
	/** name of the addon select category. for example select sauce */
	name:string
};
	["PersonUpdateInput"]: {
		phone?:string,
	lastName?:string,
	/** extra details */
	details?:string,
	address?:GraphQLTypes["AddressUpdateInput"],
	firstName?:string
};
	/** Location without creation date */
["PureLocation"]: {
	__typename: "PureLocation",
	latitude:number,
	longitude:number
};
	/** All queries for tenant and members<br> */
["TenantQuery"]: {
	__typename: "TenantQuery",
	admin?:GraphQLTypes["AdminQuery"],
	/** internal developer query */
	developer?:GraphQLTypes["DeveloperQuery"],
	driver?:GraphQLTypes["DriverQuery"],
	restaurant?:GraphQLTypes["RestaurantQuery"],
	/** internal tenant query */
	tenant?:GraphQLTypes["TenantBaseQuery"]
};
	["LocationData"]: {
	__typename: "LocationData",
	createdAt:GraphQLTypes["Date"],
	latitude:number,
	longitude:number
};
	/** Order as visible for developer integration */
["DeveloperOrder"]: {
	__typename: "DeveloperOrder",
	address:GraphQLTypes["Address"],
	/** the order is bigger than usually */
	bigOrder?:boolean,
	/** Delivery is left in front of the door. */
	contactLess?:boolean,
	createdAt:GraphQLTypes["Date"],
	/** determines if driver is late */
	driverLate?:boolean,
	/** extra details of an order */
	extraDetails?:string,
	id:GraphQLTypes["ObjectId"],
	payment:GraphQLTypes["PaymentType"],
	restaurant:GraphQLTypes["DeveloperRestaurant"],
	status:GraphQLTypes["OrderStatus"]
};
	["Addon"]: {
	__typename: "Addon",
	/** Name as seen in the menu */
	name:string,
	/** Price in smallest currency available unit */
	price:number
};
	["AddressUpdateInput"]: {
		street:string,
	unit:string,
	flat?:string
};
	["UpdateAddon"]: {
		/** Price in smallest currency available unit */
	price?:number,
	/** Name as seen in the menu */
	name:string,
	/** Name to replace */
	newName?:string
};
	["RestaurantUpdateInput"]: {
		phone?:string,
	address?:GraphQLTypes["AddressUpdateInput"],
	deliveryFee?:number,
	ownerUsername:string,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee?:number,
	parkingFee?:number,
	name?:string
};
	["GoogleMapsParams"]: {
		/** radius around location */
	radius?:number,
	/** Language of the response */
	language?:GraphQLTypes["GoogleMapsLanguage"],
	/** location to search around */
	location?:string,
	/** query input to search */
	input:string
};
	["RestaurantAddOrder"]: {
		/** Number to the client */
	clientPhoneNumber?:string,
	total:number,
	extraDetails?:string,
	/** Specify payment type */
	payment:GraphQLTypes["PaymentType"],
	/** Big order package */
	bigOrder?:boolean,
	deliveryOnHour?:boolean,
	address:GraphQLTypes["AddressAddInput"],
	/** When the order will be ready */
	readyIn:number,
	/** contactless delivery */
	contactLess?:boolean
};
	["RemoveVehicle"]: {
		name:string
};
	["PushRegisterInput"]: {
		pushToken:string,
	platform:GraphQLTypes["Platform"]
};
	["Dated"]: {
	__typename:"Order" | "OrderStatusChange" | "Restaurant" | "Driver"
	createdAt:GraphQLTypes["Date"]
	['...on Order']: '__union' & GraphQLTypes["Order"];
	['...on OrderStatusChange']: '__union' & GraphQLTypes["OrderStatusChange"];
	['...on Restaurant']: '__union' & GraphQLTypes["Restaurant"];
	['...on Driver']: '__union' & GraphQLTypes["Driver"];
};
	["PaymentType"]: PaymentType;
	["UpdateOpeningHours"]: {
		days:GraphQLTypes["UpdateDay"][]
};
	["UpdateVehicle"]: {
		/** Get vehicle to update name */
	registrationId:string,
	name?:string
};
	["OwnerReportsQuery"]: {
	__typename: "OwnerReportsQuery",
	ownerOrderReport:GraphQLTypes["OwnerOrderReport"][]
};
	/** All mutations of users system */
["UserMutation"]: {
	__typename: "UserMutation",
	changePassword:GraphQLTypes["LoggedInData"],
	forgotPassword?:boolean,
	/** Make user a superadmin on a first call. Then you need to be an admin to call this */
	makeAdmin?:boolean,
	/** Register a new user<br> */
	register?:GraphQLTypes["LoggedInData"],
	resetPassword?:boolean
};
	["ChangePassword"]: {
		password:string,
	newPassword:string
};
	["Platform"]: Platform;
	["TenantBaseQuery"]: {
	__typename: "TenantBaseQuery",
	me:GraphQLTypes["Tenant"]
};
	["UpdateDish"]: {
		/** Name as seen in the menu */
	name:string,
	/** changeName */
	newName:string,
	/** Price in smallest currency available unit */
	price?:number
};
	/** Internal input for update day */
["UpdateDay"]: {
		from:string,
	to:string,
	day:GraphQLTypes["Week"]
};
	/** Universal input for filtering users( Drivers, Restaurants, Tenants ) based on their status in system */
["UserActivityFilter"]: {
		isArchived?:GraphQLTypes["isArchived"],
	hasAccount?:boolean
};
	["TimeFilter"]: {
		from:GraphQLTypes["Date"],
	to?:GraphQLTypes["Date"]
};
	["Date"]:any;
	["OwnerOrderReport"]: {
	__typename: "OwnerOrderReport",
	createdAt:GraphQLTypes["Date"],
	tenantName:string
};
	["LoggedInData"]: {
	__typename: "LoggedInData",
	token?:string
};
	["DeveloperDetails"]: {
		name:string
};
	/** Publicly available info about restaurant */
["RestaurantInfo"]: {
	__typename: "RestaurantInfo",
	address:GraphQLTypes["Address"],
	name:string,
	phone:string
};
	["MenuQuery"]: {
	__typename: "MenuQuery",
	listMenu?:GraphQLTypes["Menu"][]
};
	["DetailsDriverWorkSchedule"]: {
		ownerUsernameInput:GraphQLTypes["OwnerUsernameInput"],
	date:string
};
	["ChangeOrderStatus"]: {
		location?:GraphQLTypes["LocationInput"],
	status:GraphQLTypes["OrderStatus"],
	orderId:GraphQLTypes["ObjectId"]
};
	["LocationInput"]: {
		latitude:number,
	longitude:number
};
	["AdminMutation"]: {
	__typename: "AdminMutation",
	addCoordinator?:boolean,
	/** add developer integration
entry */
	addDeveloper?:boolean,
	addDriver?:boolean,
	addDriverWorkSchedule?:boolean,
	addOrder?:boolean,
	addRestaurant?:boolean,
	/** create vehicle in database */
	addVehicle?:boolean,
	/** create vehicle note in database */
	addVehicleNote?:boolean,
	/** archive the driver who is no longer served by the tenant */
	archiveDriver?:boolean,
	/** archive the restaurant which is no longer served by tenant */
	archiveRestaurant?:boolean,
	/** Force assign driver to existing order  */
	assignDriverToOrder?:boolean,
	removeCoordinator?:boolean,
	/** Remove developer entry */
	removeDeveloper?:boolean,
	removeDriver?:boolean,
	removeDriverWorkSchedule?:boolean,
	removeOrder?:boolean,
	removeRestaurant?:boolean,
	/** remove vehicle from database */
	removeVehicle?:boolean,
	/** remove vehicle note from database */
	removeVehicleNote?:boolean,
	setDeveloperRestaurants?:boolean,
	/** set support details singleton settings.  */
	setSupportDetails?:boolean,
	settleOrder?:boolean,
	unArchiveDriver?:boolean,
	unArchiveRestaurant?:boolean,
	updateCoordinator?:boolean,
	updateDriver?:boolean,
	updateDriverWorkSchedule?:boolean,
	updateOrder?:boolean,
	updateRestaurant?:boolean,
	/** update vehicle in database */
	updateVehicle?:boolean,
	/** update vehicle note in database */
	updateVehicleNote?:boolean
};
	/** Queries for the administrator of the whole system */
["OwnerQuery"]: {
	__typename: "OwnerQuery",
	reports?:GraphQLTypes["OwnerReportsQuery"],
	tenants:GraphQLTypes["Tenant"][]
};
	/** All queries of users system */
["UserQuery"]: {
	__typename: "UserQuery",
	/** Check if logged in user is admin<br> */
	isAdmin?:boolean,
	/** Check if there is admin already */
	isAdminClaimPossible?:boolean,
	/** Log user in */
	login?:GraphQLTypes["LoggedInData"]
};
	["DeveloperOrderFilter"]: {
		/** Period */
	period?:GraphQLTypes["TimeFilter"],
	/** restaurant owner username */
	restaurant?:string,
	status?:GraphQLTypes["OrderStatus"][],
	payment?:GraphQLTypes["PaymentType"]
};
	/** Category of dish containing relevenat dishes. On dish must exist in one or more categories */
["DishCategory"]: {
	__typename: "DishCategory",
	/** All dishes in category */
	dishes:GraphQLTypes["Dish"][],
	/** Name as seen in the menu */
	name:string
};
	["UpdateTenant"]: {
		name?:string,
	ownerUsername:string,
	address?:GraphQLTypes["AddressUpdateInput"],
	phone?:string
};
	/** Universal Person Credentials */
["Person"]: {
	__typename: "Person",
	/** person address */
	address?:GraphQLTypes["Address"],
	/** extra details */
	details?:string,
	firstName:string,
	lastName:string,
	phone:string
};
	["RestaurantQuery"]: {
	__typename: "RestaurantQuery",
	checkOrderLoad:GraphQLTypes["OrderLoad"],
	/** Estimate the cost of delivery */
	estimateDelivery:GraphQLTypes["DeliveryCostResponse"],
	/** Returns logged in restaurant details */
	me:GraphQLTypes["Restaurant"],
	menu?:GraphQLTypes["MenuQuery"],
	/** Orders for preparation<br> */
	openOrders:GraphQLTypes["Order"][],
	/** Get details of an order */
	orderDetails:GraphQLTypes["Order"],
	/** Get all order status changes together with its location */
	orderStatusHistory:GraphQLTypes["OrderStatusChange"][],
	supportDetails:GraphQLTypes["SupportDetails"]
};
	/** Query the access of the user to the app */
["AccessQuery"]: {
	__typename: "AccessQuery",
	/** Return roles of the user */
	roles:GraphQLTypes["Role"][]
};
	["ObjectId"]:any;
	["OpeningHours"]: {
	__typename: "OpeningHours",
	day:GraphQLTypes["Week"],
	from:string,
	to:string
};
	/** Developer mutations */
["DeveloperMutation"]: {
	__typename: "DeveloperMutation",
	addOrder?:string
};
	/** All roles available around the system */
["Role"]: Role;
	/** Current system load.  */
["OrderLoad"]: OrderLoad;
	/** All mutations for tenant and members<br> */
["TenantMutation"]: {
	__typename: "TenantMutation",
	admin?:GraphQLTypes["AdminMutation"],
	/** internal developer mutation */
	developer?:GraphQLTypes["DeveloperMutation"],
	driver?:GraphQLTypes["DriverMutation"],
	restaurant?:GraphQLTypes["RestaurantMutation"],
	/** Internal tenant mutations */
	tenant?:GraphQLTypes["TenantBaseMutation"]
};
	/** Type used for displaying the publicly available tenant info */
["TenantInfo"]: {
	__typename: "TenantInfo",
	name:string,
	restaurants:GraphQLTypes["RestaurantInfo"][]
};
	["CreateAddonSelect"]: {
		/** if multiple select is available please select this flag */
	multiple?:boolean,
	/** name of the addon select category. for example select sauce */
	name:string
};
	["RemoveMenu"]: {
		/** Menu name */
	name:string
};
	["RestaurantAddInput"]: {
		address:GraphQLTypes["AddressAddInput"],
	deliveryFee:number,
	ownerUsername:string,
	/** Fee per each kilometer if order is to be delivered outside the base zone */
	deliveryPerKmFee:number,
	parkingFee:number,
	name:string,
	phone:string
};
	/** Tenant of the foodeli app */
["Tenant"]: {
	__typename: "Tenant",
	address:GraphQLTypes["Address"],
	/** Checks if tenant already has user account */
	hasAccount?:boolean,
	location:GraphQLTypes["PureLocation"],
	name:string,
	/** Unique username of the owner. */
	ownerUsername:string,
	phone?:string,
	/** Tenant radius for base delivery fee in meters */
	radius?:number
};
	["MenuMutation"]: {
	__typename: "MenuMutation",
	addAddon?:boolean,
	addAddonSelect?:boolean,
	addCategory?:boolean,
	addDish?:boolean,
	addMenu?:boolean,
	removeAddon?:boolean,
	removeAddonSelect?:boolean,
	removeCategory?:boolean,
	removeDish?:boolean,
	removeMenu?:boolean,
	updateAddon?:boolean,
	updateAddonSelect?:boolean,
	updateCategory?:boolean,
	updateDish?:boolean,
	updateMenu?:boolean
};
	["UpdateDriverWorkSchedule"]: {
		date?:string,
	start?:string,
	end?:string
};
	["DriverAddInput"]: {
		deliveryRate?:number,
	PESEL?:string,
	credentials:GraphQLTypes["PersonAddInput"],
	ownerUsername:string
};
	["RemoveVehicleNote"]: {
		vehicleName:string
};
	["OrderStatus"]: OrderStatus;
	["Driver"]: {
	__typename: "Driver",
	PESEL?:string,
	/** Is driver working now */
	active?:boolean,
	/** If the driver is archived this is the archiving date */
	archivedAt?:GraphQLTypes["Date"],
	createdAt:GraphQLTypes["Date"],
	credentials:GraphQLTypes["Person"],
	deliveryRate:number,
	/** Determines if driver has account in foodeli system */
	hasAccount?:boolean,
	lastLocation?:GraphQLTypes["LocationData"],
	locations:GraphQLTypes["LocationData"][],
	ownerUsername:string,
	pushToken?:string
};
	["OwnerMutation"]: {
	__typename: "OwnerMutation",
	addTenant?:boolean,
	editTenant?:boolean,
	removeTenant?:boolean
};
	["UpdateMenu"]: {
		/** Menu name */
	name:string,
	/** name to change */
	newName?:string
};
	["TakeOrder"]: {
		location:GraphQLTypes["LocationInput"],
	/** driver will take order X minutes from now */
	minutesFromNow:number,
	orderId:GraphQLTypes["ObjectId"]
};
	["isArchived"]: {
		archived:boolean
};
	/** Delivery cost response based on address<br> */
["DeliveryCostResponse"]: {
	__typename: "DeliveryCostResponse",
	canBeDelivered:boolean,
	cost?:number
};
	["UpdateSupportDetails"]: {
		phone?:string,
	email?:string
};
	["DriverUpdateInput"]: {
		deliveryRate?:number,
	PESEL?:string,
	credentials?:GraphQLTypes["PersonUpdateInput"],
	ownerUsername:string
}
    }
export enum GoogleMapsLanguage {
	pl = "pl",
	en = "en"
}
export enum Week {
	MONDAY = "MONDAY",
	TUESDAY = "TUESDAY",
	WEDNESDAY = "WEDNESDAY",
	THURSDAY = "THURSDAY",
	FRIDAY = "FRIDAY",
	SATURDAY = "SATURDAY",
	SUNDAY = "SUNDAY"
}
export enum PaymentType {
	CARD_ON_DELIVERY = "CARD_ON_DELIVERY",
	PAID_TO_RESTAURANT = "PAID_TO_RESTAURANT",
	ONLINE_PAYMENT = "ONLINE_PAYMENT",
	CASH_ON_DELIVERY = "CASH_ON_DELIVERY"
}
export enum Platform {
	IOS = "IOS",
	ANDROID = "ANDROID",
	WEB = "WEB"
}
/** All roles available around the system */
export enum Role {
	OWNER = "OWNER",
	ADMIN = "ADMIN",
	RESTAURANT = "RESTAURANT",
	DRIVER = "DRIVER",
	COORDINATOR = "COORDINATOR"
}
/** Current system load.  */
export enum OrderLoad {
	LOW = "LOW",
	NORMAL = "NORMAL",
	HIGH = "HIGH",
	OVERLOAD = "OVERLOAD"
}
export enum OrderStatus {
	CLIENT = "CLIENT",
	DELIVERED = "DELIVERED",
	NOT_DELIVERED = "NOT_DELIVERED",
	DISCOUNT = "DISCOUNT",
	OPEN = "OPEN",
	WAITING = "WAITING",
	TAKEN = "TAKEN",
	RESTAURANT = "RESTAURANT",
	RESTAURANT_CANCELLED = "RESTAURANT_CANCELLED",
	DRIVINGCLIENT = "DRIVINGCLIENT"
}

export const AllTypesProps: Record<string,any> = {
	CreateTenant:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		address:{
			type:"AddressAddInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateAddonSelect:{
		addonsToChoose:{
			type:"ObjectId",
			array:true,
			arrayRequired:false,
			required:true
		},
		multiple:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		newName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CoordinatorUpdateInput:{
		person:{
			type:"PersonUpdateInput",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	GoogleMapsLanguage: "enum",
	DriverQuery:{
		historyOrders:{
			period:{
				type:"TimeFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		mySchedule:{
			timeFilter:{
				type:"TimeFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		orderDetails:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	DriverMutation:{
		changeOrderStatus:{
			change:{
				type:"ChangeOrderStatus",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		lateForOrder:{
			orderId:{
				type:"ObjectId",
				array:false,
				arrayRequired:false,
				required:true
			},
			minutesLate:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		registerPush:{
			push:{
				type:"PushRegisterInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		sendLocation:{
			location:{
				type:"LocationInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		takeOrder:{
			order:{
				type:"TakeOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	UpdateVehicleNote:{
		date:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		course:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		note:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		vehicleName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	OrderAddInput:{
		extraDetails:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		payment:{
			type:"PaymentType",
			array:false,
			arrayRequired:false,
			required:true
		},
		contactLess:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		bigOrder:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		restaurant:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		address:{
			type:"AddressAddInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		readyAt:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		total:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		clientPhoneNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		deliveryOnHour:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	CreateMenu:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateDriverWorkSchedule:{
		end:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		date:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		start:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CoordinatorAddInput:{
		person:{
			type:"PersonAddInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	ForceDriverAssign:{
		orderId:{
			type:"ObjectId",
			array:false,
			arrayRequired:false,
			required:true
		},
		driver:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	OrderDetailsInput:{
		id:{
			type:"ObjectId",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	AdminOrderFilter:{
		payment:{
			type:"PaymentType",
			array:false,
			arrayRequired:false,
			required:false
		},
		period:{
			type:"TimeFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		restaurant:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		driver:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OrderStatus",
			array:true,
			arrayRequired:false,
			required:true
		}
	},
	RestaurantMutation:{
		addOrder:{
			order:{
				type:"RestaurantAddOrder",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		authoriseOrder:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		cancelOrder:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		setOpeningHours:{
			openingHours:{
				type:"UpdateOpeningHours",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CreateDishCategory:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateDish:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		price:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UserBasicData:{
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	AddressAddInput:{
		unit:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		flat:{
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
		}
	},
	CreateVehicle:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		registrationId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PublicQuery:{
		suggestAddress:{
			maps:{
				type:"GoogleMapsParams",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	CreateAddon:{
		price:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	SetDeveloperRestaurants:{
		ownerUsernames:{
			type:"String",
			array:true,
			arrayRequired:true,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	OrderUpdateInput:{
		restaurant:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		address:{
			type:"AddressUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		extraDetails:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OrderStatus",
			array:false,
			arrayRequired:false,
			required:false
		},
		settled:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		payment:{
			type:"PaymentType",
			array:false,
			arrayRequired:false,
			required:false
		},
		clientPhoneNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		driverArrives:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		deliveryOnHour:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		contactLess:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ObjectId",
			array:false,
			arrayRequired:false,
			required:true
		},
		total:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		readyAt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		bigOrder:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		driver:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Week: "enum",
	ResetPassword:{
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		newPassword:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PersonAddInput:{
		firstName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		lastName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		details:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		address:{
			type:"AddressAddInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AdminQuery:{
		coordinator:{
			ownerUsernameInput:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		driver:{
			driver:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		listDrivers:{
			userFilter:{
				type:"UserActivityFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		listRestaurants:{
			userFilter:{
				type:"UserActivityFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		order:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		orders:{
			filter:{
				type:"AdminOrderFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		restaurant:{
			restaurant:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		schedules:{
			timeFilter:{
				type:"TimeFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	DeveloperQuery:{
		orderById:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		orders:{
			filter:{
				type:"DeveloperOrderFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	CreateDeveloper:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CreateVehicleNote:{
		course:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		note:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		vehicleName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		date:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	TenantBaseMutation:{
		changeRadius:{
			radius:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	OwnerUsernameInput:{
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PersonUpdateInput:{
		phone:{
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
		details:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		address:{
			type:"AddressUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		firstName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AddressUpdateInput:{
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
		},
		flat:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateAddon:{
		price:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		newName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	RestaurantUpdateInput:{
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		address:{
			type:"AddressUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		deliveryFee:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		deliveryPerKmFee:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		parkingFee:{
			type:"Int",
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
	},
	GoogleMapsParams:{
		radius:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		language:{
			type:"GoogleMapsLanguage",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		input:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	RestaurantAddOrder:{
		clientPhoneNumber:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		total:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		extraDetails:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		payment:{
			type:"PaymentType",
			array:false,
			arrayRequired:false,
			required:true
		},
		bigOrder:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		deliveryOnHour:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		address:{
			type:"AddressAddInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		readyIn:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		contactLess:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	RemoveVehicle:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PushRegisterInput:{
		pushToken:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		platform:{
			type:"Platform",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PaymentType: "enum",
	UpdateOpeningHours:{
		days:{
			type:"UpdateDay",
			array:true,
			arrayRequired:true,
			required:true
		}
	},
	UpdateVehicle:{
		registrationId:{
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
		}
	},
	OwnerReportsQuery:{
		ownerOrderReport:{
			timeFilter:{
				type:"TimeFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	UserMutation:{
		changePassword:{
			changePassword:{
				type:"ChangePassword",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		forgotPassword:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		makeAdmin:{
			username:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		register:{
			user:{
				type:"UserBasicData",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		resetPassword:{
			reset:{
				type:"ResetPassword",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	ChangePassword:{
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		newPassword:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Platform: "enum",
	UpdateDish:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		newName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		price:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateDay:{
		from:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		to:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		day:{
			type:"Week",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UserActivityFilter:{
		isArchived:{
			type:"isArchived",
			array:false,
			arrayRequired:false,
			required:false
		},
		hasAccount:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	TimeFilter:{
		from:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:true
		},
		to:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Date: "String",
	DeveloperDetails:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	DetailsDriverWorkSchedule:{
		ownerUsernameInput:{
			type:"OwnerUsernameInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		date:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	ChangeOrderStatus:{
		location:{
			type:"LocationInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OrderStatus",
			array:false,
			arrayRequired:false,
			required:true
		},
		orderId:{
			type:"ObjectId",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	LocationInput:{
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
	AdminMutation:{
		addCoordinator:{
			coordinatorAddInput:{
				type:"CoordinatorAddInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addDeveloper:{
			developer:{
				type:"CreateDeveloper",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addDriver:{
			driver:{
				type:"DriverAddInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addDriverWorkSchedule:{
			createDriverWorkSchedule:{
				type:"CreateDriverWorkSchedule",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addOrder:{
			order:{
				type:"OrderAddInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addRestaurant:{
			restaurant:{
				type:"RestaurantAddInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addVehicle:{
			vehicle:{
				type:"CreateVehicle",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addVehicleNote:{
			vehicleNote:{
				type:"CreateVehicleNote",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		archiveDriver:{
			driver:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		archiveRestaurant:{
			restaurant:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		assignDriverToOrder:{
			assign:{
				type:"ForceDriverAssign",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeCoordinator:{
			ownerUsernameInput:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeDeveloper:{
			developer:{
				type:"DeveloperDetails",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeDriver:{
			driver:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeDriverWorkSchedule:{
			detailsDriverWorkSchedule:{
				type:"DetailsDriverWorkSchedule",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeOrder:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeRestaurant:{
			restaurant:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeVehicle:{
			vehicle:{
				type:"RemoveVehicle",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeVehicleNote:{
			vehicleNote:{
				type:"RemoveVehicleNote",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		setDeveloperRestaurants:{
			restaurants:{
				type:"SetDeveloperRestaurants",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		setSupportDetails:{
			updateSupportDetails:{
				type:"UpdateSupportDetails",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		settleOrder:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		unArchiveDriver:{
			driver:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		unArchiveRestaurant:{
			restaurant:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateCoordinator:{
			coordinatorUpdateInput:{
				type:"CoordinatorUpdateInput",
				array:false,
				arrayRequired:false,
				required:true
			},
			ownerUsernameInput:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateDriver:{
			driver:{
				type:"DriverUpdateInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateDriverWorkSchedule:{
			updateDriverWorkSchedule:{
				type:"UpdateDriverWorkSchedule",
				array:false,
				arrayRequired:false,
				required:true
			},
			detailsDriverWorkSchedule:{
				type:"DetailsDriverWorkSchedule",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateOrder:{
			order:{
				type:"OrderUpdateInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateRestaurant:{
			restaurant:{
				type:"RestaurantUpdateInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateVehicle:{
			vehicle:{
				type:"UpdateVehicle",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateVehicleNote:{
			vehicleNote:{
				type:"UpdateVehicleNote",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	OwnerQuery:{
		tenants:{
			userFilter:{
				type:"UserActivityFilter",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UserQuery:{
		login:{
			user:{
				type:"UserBasicData",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	DeveloperOrderFilter:{
		period:{
			type:"TimeFilter",
			array:false,
			arrayRequired:false,
			required:false
		},
		restaurant:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OrderStatus",
			array:true,
			arrayRequired:false,
			required:true
		},
		payment:{
			type:"PaymentType",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UpdateTenant:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		address:{
			type:"AddressUpdateInput",
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
	RestaurantQuery:{
		estimateDelivery:{
			address:{
				type:"AddressAddInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		openOrders:{
			period:{
				type:"TimeFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		orderDetails:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		orderStatusHistory:{
			order:{
				type:"OrderDetailsInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	ObjectId: "String",
	DeveloperMutation:{
		addOrder:{
			order:{
				type:"OrderAddInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Role: "enum",
	OrderLoad: "enum",
	CreateAddonSelect:{
		multiple:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	RemoveMenu:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	RestaurantAddInput:{
		address:{
			type:"AddressAddInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		deliveryFee:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		deliveryPerKmFee:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		parkingFee:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	MenuMutation:{
		addAddon:{
			addon:{
				type:"CreateAddon",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addAddonSelect:{
			addonSelect:{
				type:"CreateAddonSelect",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addCategory:{
			category:{
				type:"CreateDishCategory",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addDish:{
			dish:{
				type:"CreateDish",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		addMenu:{
			menu:{
				type:"CreateMenu",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeAddon:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeAddonSelect:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeCategory:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeDish:{
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeMenu:{
			menu:{
				type:"RemoveMenu",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateAddon:{
			addon:{
				type:"UpdateAddon",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateAddonSelect:{
			addonSelect:{
				type:"UpdateAddonSelect",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateCategory:{
			category:{
				type:"CreateDishCategory",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateDish:{
			dish:{
				type:"UpdateDish",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateMenu:{
			menu:{
				type:"UpdateMenu",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	UpdateDriverWorkSchedule:{
		date:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		start:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		end:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DriverAddInput:{
		deliveryRate:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		PESEL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		credentials:{
			type:"PersonAddInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	RemoveVehicleNote:{
		vehicleName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	OrderStatus: "enum",
	Driver:{
		locations:{
			period:{
				type:"TimeFilter",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	OwnerMutation:{
		addTenant:{
			tenant:{
				type:"CreateTenant",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		editTenant:{
			tenant:{
				type:"UpdateTenant",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		removeTenant:{
			tenant:{
				type:"OwnerUsernameInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	UpdateMenu:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		newName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	TakeOrder:{
		location:{
			type:"LocationInput",
			array:false,
			arrayRequired:false,
			required:true
		},
		minutesFromNow:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		orderId:{
			type:"ObjectId",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	isArchived:{
		archived:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	UpdateSupportDetails:{
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DriverUpdateInput:{
		deliveryRate:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		PESEL:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		credentials:{
			type:"PersonUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ownerUsername:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	DriverQuery:{
		historyOrders:"Order",
		me:"Driver",
		myOrders:"Order",
		mySchedule:"DriverWorkSchedule",
		openOrders:"Order",
		orderDetails:"Order",
		supportDetails:"SupportDetails"
	},
	Vehicle:{
		name:"String",
		registrationId:"String"
	},
	DriverMutation:{
		activate:"Boolean",
		changeOrderStatus:"Boolean",
		deactivate:"Boolean",
		lateForOrder:"Boolean",
		registerPush:"String",
		sendLocation:"Boolean",
		takeOrder:"Boolean"
	},
	Address:{
		city:"String",
		country:"String",
		flat:"String",
		location:"PureLocation",
		street:"String",
		unit:"String"
	},
	Order:{
		address:"Address",
		bigOrder:"Boolean",
		clientPhoneNumber:"String",
		contactLess:"Boolean",
		createdAt:"Date",
		deliveryOnHour:"Boolean",
		deliveryPrice:"Int",
		distance:"Int",
		driver:"Driver",
		driverArrives:"Date",
		driverLate:"Boolean",
		extraDetails:"String",
		id:"ObjectId",
		payment:"PaymentType",
		readyAt:"Date",
		restaurant:"Restaurant",
		settled:"String",
		status:"OrderStatus",
		time:"Int",
		total:"Int"
	},
	VehicleNote:{
		course:"Int",
		date:"Date",
		note:"String",
		vehicle:"Vehicle"
	},
	DriverWorkSchedule:{
		date:"String",
		driver:"Driver",
		end:"String",
		start:"String"
	},
	RestaurantMutation:{
		addOrder:"Boolean",
		authoriseOrder:"Boolean",
		cancelOrder:"Boolean",
		menu:"MenuMutation",
		setOpeningHours:"Boolean"
	},
	SupportDetails:{
		email:"String",
		phone:"String"
	},
	Developer:{
		apiKey:"String",
		name:"String",
		ownerUsername:"String",
		restaurantsUsernames:"String"
	},
	OrderStatusChange:{
		createdAt:"Date",
		location:"PureLocation",
		order:"Order",
		status:"OrderStatus"
	},
	Restaurant:{
		address:"Address",
		archivedAt:"Date",
		createdAt:"Date",
		deliveryFee:"Int",
		deliveryPerKmFee:"Int",
		hasAccount:"Boolean",
		name:"String",
		open:"OpeningHours",
		ownerUsername:"String",
		parkingFee:"Int",
		phone:"String"
	},
	Mutation:{
		owner:"OwnerMutation",
		tenant:"TenantMutation",
		users:"UserMutation"
	},
	PublicQuery:{
		suggestAddress:"String",
		tenants:"TenantInfo"
	},
	Coordinator:{
		ownerUsername:"String",
		person:"Person"
	},
	Query:{
		access:"AccessQuery",
		owner:"OwnerQuery",
		public:"PublicQuery",
		tenant:"TenantQuery",
		users:"UserQuery"
	},
	AdminQuery:{
		coordinator:"Coordinator",
		driver:"Driver",
		listCoordinators:"Coordinator",
		listDevelopers:"Developer",
		listDrivers:"Driver",
		listRestaurants:"Restaurant",
		listVehicleNotes:"VehicleNote",
		listVehicles:"Vehicle",
		order:"Order",
		orders:"Order",
		restaurant:"Restaurant",
		schedules:"DriverWorkSchedule",
		supportDetails:"SupportDetails"
	},
	DeveloperQuery:{
		orderById:"Order",
		orders:"DeveloperOrder",
		restaurants:"DeveloperRestaurant"
	},
	Menu:{
		categories:"DishCategory",
		listAddon:"Addon",
		listAddonSelect:"AddonSelect",
		listDishes:"Dish",
		name:"String"
	},
	TenantBaseMutation:{
		changeRadius:"Boolean"
	},
	Addressed:{
		"...on Order": "Order",
		"...on Restaurant": "Restaurant",
		"...on DeveloperRestaurant": "DeveloperRestaurant",
		address:"Address"
	},
	DeveloperRestaurant:{
		address:"Address",
		name:"String",
		open:"OpeningHours",
		ownerUsername:"String",
		phone:"String"
	},
	Dish:{
		addonSelections:"AddonSelect",
		categories:"DishCategory",
		name:"String",
		price:"Int"
	},
	AddonSelect:{
		addonsToChoose:"Addon",
		id:"ObjectId",
		multiple:"Boolean",
		name:"String"
	},
	PureLocation:{
		latitude:"Float",
		longitude:"Float"
	},
	TenantQuery:{
		admin:"AdminQuery",
		developer:"DeveloperQuery",
		driver:"DriverQuery",
		restaurant:"RestaurantQuery",
		tenant:"TenantBaseQuery"
	},
	LocationData:{
		createdAt:"Date",
		latitude:"Float",
		longitude:"Float"
	},
	DeveloperOrder:{
		address:"Address",
		bigOrder:"Boolean",
		contactLess:"Boolean",
		createdAt:"Date",
		driverLate:"Boolean",
		extraDetails:"String",
		id:"ObjectId",
		payment:"PaymentType",
		restaurant:"DeveloperRestaurant",
		status:"OrderStatus"
	},
	Addon:{
		name:"String",
		price:"Int"
	},
	Dated:{
		"...on Order": "Order",
		"...on OrderStatusChange": "OrderStatusChange",
		"...on Restaurant": "Restaurant",
		"...on Driver": "Driver",
		createdAt:"Date"
	},
	OwnerReportsQuery:{
		ownerOrderReport:"OwnerOrderReport"
	},
	UserMutation:{
		changePassword:"LoggedInData",
		forgotPassword:"Boolean",
		makeAdmin:"Boolean",
		register:"LoggedInData",
		resetPassword:"Boolean"
	},
	TenantBaseQuery:{
		me:"Tenant"
	},
	OwnerOrderReport:{
		createdAt:"Date",
		tenantName:"String"
	},
	LoggedInData:{
		token:"String"
	},
	RestaurantInfo:{
		address:"Address",
		name:"String",
		phone:"String"
	},
	MenuQuery:{
		listMenu:"Menu"
	},
	AdminMutation:{
		addCoordinator:"Boolean",
		addDeveloper:"Boolean",
		addDriver:"Boolean",
		addDriverWorkSchedule:"Boolean",
		addOrder:"Boolean",
		addRestaurant:"Boolean",
		addVehicle:"Boolean",
		addVehicleNote:"Boolean",
		archiveDriver:"Boolean",
		archiveRestaurant:"Boolean",
		assignDriverToOrder:"Boolean",
		removeCoordinator:"Boolean",
		removeDeveloper:"Boolean",
		removeDriver:"Boolean",
		removeDriverWorkSchedule:"Boolean",
		removeOrder:"Boolean",
		removeRestaurant:"Boolean",
		removeVehicle:"Boolean",
		removeVehicleNote:"Boolean",
		setDeveloperRestaurants:"Boolean",
		setSupportDetails:"Boolean",
		settleOrder:"Boolean",
		unArchiveDriver:"Boolean",
		unArchiveRestaurant:"Boolean",
		updateCoordinator:"Boolean",
		updateDriver:"Boolean",
		updateDriverWorkSchedule:"Boolean",
		updateOrder:"Boolean",
		updateRestaurant:"Boolean",
		updateVehicle:"Boolean",
		updateVehicleNote:"Boolean"
	},
	OwnerQuery:{
		reports:"OwnerReportsQuery",
		tenants:"Tenant"
	},
	UserQuery:{
		isAdmin:"Boolean",
		isAdminClaimPossible:"Boolean",
		login:"LoggedInData"
	},
	DishCategory:{
		dishes:"Dish",
		name:"String"
	},
	Person:{
		address:"Address",
		details:"String",
		firstName:"String",
		lastName:"String",
		phone:"String"
	},
	RestaurantQuery:{
		checkOrderLoad:"OrderLoad",
		estimateDelivery:"DeliveryCostResponse",
		me:"Restaurant",
		menu:"MenuQuery",
		openOrders:"Order",
		orderDetails:"Order",
		orderStatusHistory:"OrderStatusChange",
		supportDetails:"SupportDetails"
	},
	AccessQuery:{
		roles:"Role"
	},
	OpeningHours:{
		day:"Week",
		from:"String",
		to:"String"
	},
	DeveloperMutation:{
		addOrder:"String"
	},
	TenantMutation:{
		admin:"AdminMutation",
		developer:"DeveloperMutation",
		driver:"DriverMutation",
		restaurant:"RestaurantMutation",
		tenant:"TenantBaseMutation"
	},
	TenantInfo:{
		name:"String",
		restaurants:"RestaurantInfo"
	},
	Tenant:{
		address:"Address",
		hasAccount:"Boolean",
		location:"PureLocation",
		name:"String",
		ownerUsername:"String",
		phone:"String",
		radius:"Int"
	},
	MenuMutation:{
		addAddon:"Boolean",
		addAddonSelect:"Boolean",
		addCategory:"Boolean",
		addDish:"Boolean",
		addMenu:"Boolean",
		removeAddon:"Boolean",
		removeAddonSelect:"Boolean",
		removeCategory:"Boolean",
		removeDish:"Boolean",
		removeMenu:"Boolean",
		updateAddon:"Boolean",
		updateAddonSelect:"Boolean",
		updateCategory:"Boolean",
		updateDish:"Boolean",
		updateMenu:"Boolean"
	},
	Driver:{
		PESEL:"String",
		active:"Boolean",
		archivedAt:"Date",
		createdAt:"Date",
		credentials:"Person",
		deliveryRate:"Int",
		hasAccount:"Boolean",
		lastLocation:"LocationData",
		locations:"LocationData",
		ownerUsername:"String",
		pushToken:"String"
	},
	OwnerMutation:{
		addTenant:"Boolean",
		editTenant:"Boolean",
		removeTenant:"Boolean"
	},
	DeliveryCostResponse:{
		canBeDelivered:"Boolean",
		cost:"Int"
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
  

export const Gql = Chain('https://faker.graphqleditor.com/a-team/foodeli-tenant/graphql')