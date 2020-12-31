export const schema = `
""""""
scalar Date

""""""
input AddressAddInput {
  """"""
  street: String!

  """"""
  unit: String!

  """"""
  flat: String
}

"""Publicly available info about restaurant"""
type RestaurantInfo {
  """"""
  address: Address!

  """"""
  name: String!

  """"""
  phone: String!
}

""""""
type Mutation {
  """Mutations for administrator of the whole system"""
  owner: OwnerMutation

  """entry point for mutations for every tenant<br>"""
  tenant: TenantMutation

  """User mutation actions like register etc..."""
  users: UserMutation
}

""""""
input AdminOrderFilter {
  """Period"""
  period: TimeFilter

  """restaurant owner username"""
  restaurant: String

  """driver owner username"""
  driver: String

  """"""
  status: [OrderStatus!]

  """"""
  payment: PaymentType
}

""""""
enum GoogleMapsLanguage {
  """Polish"""
  pl

  """English"""
  en
}

""""""
input UpdateVehicleNote {
  """"""
  vehicleName: String!

  """date of note"""
  date: Date

  """course of the vehicle at the moment"""
  course: Int

  """"""
  note: String
}

""""""
input ForceDriverAssign {
  """Driver owner username"""
  driver: String!

  """"""
  orderId: ObjectId!
}

""""""
input CreateDish {
  """Name as seen in the menu"""
  name: String!

  """Price in smallest currency available unit"""
  price: Int!
}

""""""
input ChangeOrderStatus {
  """"""
  status: OrderStatus!

  """"""
  orderId: ObjectId!

  """"""
  location: LocationInput
}

""""""
input OrderAddInput {
  """"""
  extraDetails: String

  """Number to the client"""
  clientPhoneNumber: String

  """Big order package"""
  bigOrder: Boolean

  """"""
  deliveryOnHour: Boolean

  """"""
  address: AddressAddInput!

  """"""
  readyAt: Date

  """Specify payment type"""
  payment: PaymentType!

  """contactless delivery"""
  contactLess: Boolean

  """"""
  total: Int!

  """Restaurant owner username"""
  restaurant: String!
}

"""
Main type for Restaurant
## Primary key
As a primary key we will use user username
"""
type Restaurant implements Dated & Addressed {
  """"""
  address: Address!

  """If the restaurant is archived this is the archiving date"""
  archivedAt: Date

  """"""
  createdAt: Date!

  """Fee restaurant have to pay for the delivery of an order"""
  deliveryFee: Int!

  """
  Fee per each kilometer if order is to be delivered outside the base zone
  """
  deliveryPerKmFee: Int!

  """Determines if restaurant has account in foodeli system"""
  hasAccount: Boolean

  """"""
  name: String!

  """"""
  open: [OpeningHours!]!

  """Username of the owner and primary key"""
  ownerUsername: String!

  """
  Fee paid by restaurant if driver has to wait for the order longer than 5 minutes
  """
  parkingFee: Int!

  """"""
  phone: String!
}

""""""
type MenuQuery {
  """"""
  listMenu: [Menu!]
}

""""""
type DriverWorkSchedule {
  """"""
  date: String!

  """"""
  driver: Driver!

  """"""
  end: String!

  """"""
  start: String!
}

""""""
type Coordinator {
  """"""
  ownerUsername: String!

  """"""
  person: Person!
}

""""""
input ChangePassword {
  """"""
  password: String!

  """"""
  newPassword: String!
}

"""Tenant of the foodeli app"""
type Tenant {
  """"""
  address: Address!

  """Checks if tenant already has user account"""
  hasAccount: Boolean

  """"""
  location: PureLocation!

  """"""
  name: String!

  """Unique username of the owner."""
  ownerUsername: String!

  """"""
  phone: String

  """Tenant radius for base delivery fee in meters"""
  radius: Int
}

""""""
type OwnerReportsQuery {
  """"""
  ownerOrderReport(timeFilter: TimeFilter!): [OwnerOrderReport!]!
}

"""All queries of users system"""
type UserQuery {
  """Check if logged in user is admin<br>"""
  isAdmin: Boolean

  """Check if there is admin already"""
  isAdminClaimPossible: Boolean

  """Log user in"""
  login(user: UserBasicData!): LoggedInData
}

""""""
type PublicQuery {
  """Query can only be runned by admins and restaurants"""
  suggestAddress(
    """
    Google maps params as described [here](https://github.com/googlemaps/google-maps-services-js)
    """
    maps: GoogleMapsParams!
  ): [String!]!

  """"""
  tenants: [TenantInfo!]!
}

""""""
input UpdateAddonSelect {
  """name of the addon select category. for example select sauce"""
  name: String!

  """name to change"""
  newName: String

  """addon to choose"""
  addonsToChoose: [ObjectId!]

  """if multiple select is available please select this flag"""
  multiple: Boolean
}

""""""
input UpdateAddon {
  """Name as seen in the menu"""
  name: String!

  """Name to replace"""
  newName: String

  """Price in smallest currency available unit"""
  price: Int
}

""""""
type Driver implements Dated {
  """"""
  PESEL: String

  """Is driver working now"""
  active: Boolean

  """If the driver is archived this is the archiving date"""
  archivedAt: Date

  """"""
  createdAt: Date!

  """"""
  credentials: Person!

  """"""
  deliveryRate: Int!

  """Determines if driver has account in foodeli system"""
  hasAccount: Boolean

  """"""
  lastLocation: LocationData

  """"""
  locations(period: TimeFilter!): [LocationData!]!

  """"""
  ownerUsername: String!

  """"""
  pushToken: String
}

"""
When Order status is changed it is registered in the database for further reading.
"""
type OrderStatusChange implements Dated {
  """"""
  createdAt: Date!

  """"""
  location: PureLocation

  """"""
  order: Order!

  """"""
  status: OrderStatus!
}

"""Reset password details"""
input ResetPassword {
  """token received from email"""
  token: String!

  """New password for the user"""
  newPassword: String!
}

""""""
input SetDeveloperRestaurants {
  """"""
  ownerUsernames: [String!]!

  """unique name of the developer added by admin"""
  name: String!
}

""""""
input RemoveVehicleNote {
  """"""
  vehicleName: String!
}

"""Universal Person Credentials"""
type Person {
  """person address"""
  address: Address

  """extra details"""
  details: String

  """"""
  firstName: String!

  """"""
  lastName: String!

  """"""
  phone: String!
}

""""""
enum OrderStatus {
  """Restaurant cancelled this order"""
  RESTAURANT_CANCELLED

  """Waiting for driver"""
  WAITING

  """Driver is at restaurant"""
  RESTAURANT

  """Driver is at client"""
  CLIENT

  """Driver left restauration and is driving to client"""
  DRIVINGCLIENT

  """"""
  NOT_DELIVERED

  """"""
  DISCOUNT

  """Waiting to be authorised by restaurant"""
  OPEN

  """Driver has taken an order"""
  TAKEN

  """Order is delivered"""
  DELIVERED
}

"""Queries for the administrator of the whole system"""
type OwnerQuery {
  """"""
  reports: OwnerReportsQuery

  """"""
  tenants(userFilter: UserActivityFilter): [Tenant!]!
}

""""""
input TakeOrder {
  """"""
  orderId: ObjectId!

  """"""
  location: LocationInput!

  """driver will take order X minutes from now"""
  minutesFromNow: Int!
}

"""Location without creation date"""
type PureLocation {
  """"""
  latitude: Float!

  """"""
  longitude: Float!
}

""""""
input UpdateVehicle {
  """"""
  name: String

  """Get vehicle to update name"""
  registrationId: String!
}

""""""
input CreateMenu {
  """Menu name"""
  name: String!
}

""""""
input LocationInput {
  """"""
  latitude: Float!

  """"""
  longitude: Float!
}

"""
Support details of tenant. Should be visible to drivers admins and restaurants
"""
type SupportDetails {
  """"""
  email: String

  """"""
  phone: String
}

""""""
input DetailsDriverWorkSchedule {
  """"""
  ownerUsernameInput: OwnerUsernameInput!

  """"""
  date: String!
}

""""""
input RestaurantAddInput {
  """"""
  name: String!

  """"""
  phone: String!

  """"""
  address: AddressAddInput!

  """"""
  deliveryFee: Int!

  """"""
  ownerUsername: String!

  """
  Fee per each kilometer if order is to be delivered outside the base zone
  """
  deliveryPerKmFee: Int!

  """"""
  parkingFee: Int!
}

""""""
input OrderDetailsInput {
  """"""
  id: ObjectId!
}

""""""
type DriverQuery {
  """History of all driver orders"""
  historyOrders(period: TimeFilter): [Order!]!

  """Info about current logged in driver"""
  me: Driver!

  """Orders currently delivered by driver"""
  myOrders: [Order!]!

  """"""
  mySchedule(timeFilter: TimeFilter!): [DriverWorkSchedule!]!

  """List of active orders to take<br>"""
  openOrders: [Order!]!

  """Get details of an order"""
  orderDetails(order: OrderDetailsInput!): Order!

  """"""
  supportDetails: SupportDetails!
}

"""
Universal input for filtering users( Drivers, Restaurants, Tenants ) based on their status in system
"""
input UserActivityFilter {
  """"""
  isArchived: isArchived

  """"""
  hasAccount: Boolean
}

""""""
type AdminMutation {
  """"""
  addCoordinator(coordinatorAddInput: CoordinatorAddInput!): Boolean

  """
  add developer integration
  entry
  """
  addDeveloper(developer: CreateDeveloper!): Boolean

  """"""
  addDriver(driver: DriverAddInput!): Boolean

  """"""
  addDriverWorkSchedule(createDriverWorkSchedule: CreateDriverWorkSchedule!): Boolean

  """"""
  addOrder(order: OrderAddInput!): Boolean

  """"""
  addRestaurant(
    """restaurant to be added"""
    restaurant: RestaurantAddInput!
  ): Boolean

  """create vehicle in database"""
  addVehicle(vehicle: CreateVehicle!): Boolean

  """create vehicle note in database"""
  addVehicleNote(vehicleNote: CreateVehicleNote!): Boolean

  """archive the driver who is no longer served by the tenant"""
  archiveDriver(driver: OwnerUsernameInput!): Boolean

  """archive the restaurant which is no longer served by tenant"""
  archiveRestaurant(restaurant: OwnerUsernameInput!): Boolean

  """Force assign driver to existing order"""
  assignDriverToOrder(
    """Provide driver and order id"""
    assign: ForceDriverAssign!
  ): Boolean

  """"""
  removeCoordinator(ownerUsernameInput: OwnerUsernameInput!): Boolean

  """Remove developer entry"""
  removeDeveloper(developer: DeveloperDetails!): Boolean

  """"""
  removeDriver(driver: OwnerUsernameInput!): Boolean

  """"""
  removeDriverWorkSchedule(detailsDriverWorkSchedule: DetailsDriverWorkSchedule!): Boolean

  """"""
  removeOrder(order: OrderDetailsInput!): Boolean

  """"""
  removeRestaurant(restaurant: OwnerUsernameInput!): Boolean

  """remove vehicle from database"""
  removeVehicle(vehicle: RemoveVehicle!): Boolean

  """remove vehicle note from database"""
  removeVehicleNote(vehicleNote: RemoveVehicleNote!): Boolean

  """"""
  setDeveloperRestaurants(restaurants: SetDeveloperRestaurants!): Boolean

  """set support details singleton settings. """
  setSupportDetails(updateSupportDetails: UpdateSupportDetails!): Boolean

  """"""
  settleOrder(order: OrderDetailsInput!): Boolean

  """"""
  unArchiveDriver(driver: OwnerUsernameInput!): Boolean

  """"""
  unArchiveRestaurant(restaurant: OwnerUsernameInput!): Boolean

  """"""
  updateCoordinator(coordinatorUpdateInput: CoordinatorUpdateInput!, ownerUsernameInput: OwnerUsernameInput!): Boolean

  """"""
  updateDriver(driver: DriverUpdateInput!): Boolean

  """"""
  updateDriverWorkSchedule(detailsDriverWorkSchedule: DetailsDriverWorkSchedule!, updateDriverWorkSchedule: UpdateDriverWorkSchedule!): Boolean

  """"""
  updateOrder(order: OrderUpdateInput!): Boolean

  """"""
  updateRestaurant(restaurant: RestaurantUpdateInput!): Boolean

  """update vehicle in database"""
  updateVehicle(vehicle: UpdateVehicle!): Boolean

  """update vehicle note in database"""
  updateVehicleNote(vehicleNote: UpdateVehicleNote!): Boolean
}

""""""
input CreateVehicle {
  """"""
  name: String!

  """"""
  registrationId: String!
}

""""""
input CoordinatorUpdateInput {
  """"""
  person: PersonUpdateInput!
}

""""""
input UpdateOpeningHours {
  """"""
  days: [UpdateDay!]!
}

""""""
input PushRegisterInput {
  """"""
  pushToken: String!

  """"""
  platform: Platform!
}

"""
Category of dish containing relevenat dishes. On dish must exist in one or more categories
"""
type DishCategory {
  """All dishes in category"""
  dishes: [Dish!]!

  """Name as seen in the menu"""
  name: String!
}

""""""
type AdminQuery {
  """"""
  coordinator(ownerUsernameInput: OwnerUsernameInput!): Coordinator

  """get single driver"""
  driver(driver: OwnerUsernameInput!): Driver

  """"""
  listCoordinators: [Coordinator!]!

  """list added developer integrations"""
  listDevelopers: [Developer!]!

  """"""
  listDrivers(userFilter: UserActivityFilter): [Driver!]!

  """"""
  listRestaurants(userFilter: UserActivityFilter): [Restaurant!]!

  """"""
  listVehicleNotes: [VehicleNote!]!

  """"""
  listVehicles: [Vehicle!]!

  """Get order details"""
  order(order: OrderDetailsInput!): Order

  """"""
  orders(filter: AdminOrderFilter): [Order!]!

  """Get single restaurant"""
  restaurant(restaurant: OwnerUsernameInput!): Restaurant

  """"""
  schedules(timeFilter: TimeFilter!): [DriverWorkSchedule!]!

  """"""
  supportDetails: SupportDetails!
}

""""""
input RestaurantUpdateInput {
  """"""
  phone: String

  """"""
  address: AddressUpdateInput

  """"""
  deliveryFee: Int

  """"""
  ownerUsername: String!

  """
  Fee per each kilometer if order is to be delivered outside the base zone
  """
  deliveryPerKmFee: Int

  """"""
  parkingFee: Int

  """"""
  name: String
}

""""""
enum Platform {
  """"""
  IOS

  """"""
  ANDROID

  """"""
  WEB
}

"""Main thing here. Order is responsible for all the data about it"""
type Order implements Addressed & Dated {
  """"""
  address: Address!

  """the order is bigger than usually"""
  bigOrder: Boolean

  """Number to the client"""
  clientPhoneNumber: String

  """Delivery is left in front of the door."""
  contactLess: Boolean

  """"""
  createdAt: Date!

  """Delivery should be made on certain hour and is received before"""
  deliveryOnHour: Boolean

  """price for the delivery paid by restaurant to the tenant"""
  deliveryPrice: Int!

  """Distance from client to restaurant"""
  distance: Int

  """Driver delivering order"""
  driver: Driver

  """Time driver arrives to take order from restaurant"""
  driverArrives: Date

  """determines if driver is late"""
  driverLate: Boolean

  """extra details of an order"""
  extraDetails: String

  """"""
  id: ObjectId!

  """"""
  payment: PaymentType!

  """Time at restaurant will be ready to give the order to driver"""
  readyAt: Date

  """"""
  restaurant: Restaurant!

  """
  If the order is settled there should be admin user owner username here if not it should remain empty
  """
  settled: String

  """"""
  status: OrderStatus!

  """Time needed to go from restaurant to client location"""
  time: Int

  """"""
  total: Int!
}

""""""
input TimeFilter {
  """"""
  from: Date!

  """"""
  to: Date
}

""""""
input isArchived {
  """"""
  archived: Boolean!
}

"""All mutations of users system"""
type UserMutation {
  """"""
  changePassword(changePassword: ChangePassword!): LoggedInData!

  """"""
  forgotPassword(username: String!): Boolean

  """
  Make user a superadmin on a first call. Then you need to be an admin to call this
  """
  makeAdmin(
    """username of admin user<br>"""
    username: String!
  ): Boolean

  """Register a new user<br>"""
  register(user: UserBasicData!): LoggedInData

  """"""
  resetPassword(reset: ResetPassword!): Boolean
}

""""""
type LocationData {
  """"""
  createdAt: Date!

  """"""
  latitude: Float!

  """"""
  longitude: Float!
}

""""""
type LoggedInData {
  """"""
  token: String
}

""""""
input CreateTenant {
  """"""
  address: AddressAddInput!

  """"""
  phone: String

  """"""
  name: String!

  """"""
  ownerUsername: String!
}

""""""
input UpdateDriverWorkSchedule {
  """"""
  end: String

  """"""
  date: String

  """"""
  start: String
}

""""""
type OwnerMutation {
  """"""
  addTenant(tenant: CreateTenant!): Boolean

  """"""
  editTenant(tenant: UpdateTenant!): Boolean

  """"""
  removeTenant(tenant: OwnerUsernameInput!): Boolean
}

""""""
input PersonAddInput {
  """"""
  firstName: String!

  """"""
  phone: String!

  """"""
  lastName: String!

  """extra details"""
  details: String

  """"""
  address: AddressAddInput
}

""""""
input CreateDishCategory {
  """Name as seen in the menu"""
  name: String!
}

""""""
input OwnerUsernameInput {
  """"""
  ownerUsername: String!
}

""""""
type VehicleNote {
  """course of the vehicle at the moment"""
  course: Int!

  """date of note"""
  date: Date!

  """describe what happened with vehicle at this date"""
  note: String!

  """vehicle note is about"""
  vehicle: Vehicle!
}

""""""
input GoogleMapsParams {
  """location to search around"""
  location: String

  """query input to search"""
  input: String!

  """radius around location"""
  radius: Int

  """Language of the response"""
  language: GoogleMapsLanguage
}

""""""
input CreateDeveloper {
  """"""
  name: String!

  """"""
  ownerUsername: String!
}

"""Internal input for update day"""
input UpdateDay {
  """"""
  from: String!

  """"""
  to: String!

  """"""
  day: Week!
}

""""""
type DriverMutation {
  """Call this if driver is online"""
  activate: Boolean

  """change status of active order"""
  changeOrderStatus(change: ChangeOrderStatus!): Boolean

  """Call this to take driver offline"""
  deactivate: Boolean

  """Driver declares they will be late for order"""
  lateForOrder(orderId: ObjectId!, minutesLate: Int!): Boolean

  """register for push notifications<br>"""
  registerPush(push: PushRegisterInput!): String

  """send current location"""
  sendLocation(location: LocationInput!): Boolean

  """take order from open orders<br>"""
  takeOrder(order: TakeOrder!): Boolean
}

""""""
enum PaymentType {
  """Order is paid by client on delivery"""
  CASH_ON_DELIVERY

  """Order is paid by client by card on delivery"""
  CARD_ON_DELIVERY

  """Order is already paid by other platform"""
  PAID_TO_RESTAURANT

  """Order is paid online"""
  ONLINE_PAYMENT
}

"""Delivery cost response based on address<br>"""
type DeliveryCostResponse {
  """"""
  canBeDelivered: Boolean!

  """"""
  cost: Int
}

"""Type used for displaying the publicly available tenant info"""
type TenantInfo {
  """"""
  name: String!

  """"""
  restaurants: [RestaurantInfo!]!
}

""""""
input CreateVehicleNote {
  """"""
  vehicleName: String!

  """date of note"""
  date: Date!

  """course of the vehicle at the moment"""
  course: Int!

  """"""
  note: String!
}

""""""
input UpdateSupportDetails {
  """"""
  phone: String

  """"""
  email: String
}

""""""
interface Addressed {
  """"""
  address: Address!
}

""""""
type Addon {
  """Name as seen in the menu"""
  name: String!

  """Price in smallest currency available unit"""
  price: Int!
}

""""""
type RestaurantMutation {
  """"""
  addOrder(order: RestaurantAddOrder!): Boolean

  """"""
  authoriseOrder(order: OrderDetailsInput!): Boolean

  """"""
  cancelOrder(order: OrderDetailsInput!): Boolean

  """"""
  menu: MenuMutation

  """"""
  setOpeningHours(openingHours: UpdateOpeningHours!): Boolean
}

"""Menu of the restaurant"""
type Menu {
  """All categories in the menu"""
  categories: [DishCategory!]!

  """All available Addons"""
  listAddon: [Addon!]

  """All available addon selections so you can reuse"""
  listAddonSelect: [AddonSelect!]

  """List all dishes from the menu"""
  listDishes: [Dish!]

  """Menu name"""
  name: String!
}

"""Base Unit in the menu"""
type Dish {
  """Available addon selections on this dish"""
  addonSelections: [AddonSelect!]!

  """Categories this dish exist in"""
  categories: [DishCategory!]!

  """Name as seen in the menu"""
  name: String!

  """Price in smallest currency available unit"""
  price: Int!
}

""""""
input CoordinatorAddInput {
  """"""
  person: PersonAddInput!

  """"""
  ownerUsername: String!
}

""""""
input UpdateMenu {
  """Menu name"""
  name: String!

  """name to change"""
  newName: String
}

""""""
input RemoveMenu {
  """Menu name"""
  name: String!
}

"""Developer queries"""
type DeveloperQuery {
  """"""
  orderById(order: OrderDetailsInput!): Order

  """Orders added by developer integration"""
  orders(filter: DeveloperOrderFilter): [DeveloperOrder!]!

  """"""
  restaurants: [DeveloperRestaurant!]!
}

"""
Addon representing single selection on dish. For example if you have pizza you have 3 options of dough:
* thin
* pan thick.
* italian
"""
type AddonSelect {
  """addon to choose"""
  addonsToChoose: [Addon!]!

  """"""
  id: ObjectId!

  """if multiple select is available please select this flag"""
  multiple: Boolean

  """name of the addon select category. for example select sauce"""
  name: String!
}

""""""
input UpdateDish {
  """Price in smallest currency available unit"""
  price: Int

  """Name as seen in the menu"""
  name: String!

  """changeName"""
  newName: String!
}

"""All queries for tenant and members<br>"""
type TenantQuery {
  """"""
  admin: AdminQuery

  """internal developer query"""
  developer: DeveloperQuery

  """"""
  driver: DriverQuery

  """"""
  restaurant: RestaurantQuery

  """internal tenant query"""
  tenant: TenantBaseQuery
}

""""""
type Vehicle {
  """"""
  name: String!

  """"""
  registrationId: String!
}

""""""
type OwnerOrderReport {
  """"""
  createdAt: Date!

  """"""
  tenantName: String!
}

""""""
type Query {
  """manage access"""
  access: AccessQuery

  """"""
  owner: OwnerQuery

  """"""
  public: PublicQuery

  """entry point for queries for every tenant<br>"""
  tenant: TenantQuery

  """User actions here"""
  users: UserQuery
}

"""All roles available around the system"""
enum Role {
  """"""
  RESTAURANT

  """"""
  DRIVER

  """"""
  COORDINATOR

  """"""
  OWNER

  """"""
  ADMIN
}

""""""
input AddressUpdateInput {
  """"""
  street: String!

  """"""
  unit: String!

  """"""
  flat: String
}

""""""
type TenantBaseMutation {
  """Change base radius of a tenant"""
  changeRadius(
    """Radius in meters"""
    radius: Int!
  ): Boolean
}

""""""
input DeveloperDetails {
  """"""
  name: String!
}

""""""
type RestaurantQuery {
  """"""
  checkOrderLoad: OrderLoad!

  """Estimate the cost of delivery"""
  estimateDelivery(address: AddressAddInput!): DeliveryCostResponse!

  """Returns logged in restaurant details"""
  me: Restaurant!

  """"""
  menu: MenuQuery

  """Orders for preparation<br>"""
  openOrders(period: TimeFilter!): [Order!]!

  """Get details of an order"""
  orderDetails(order: OrderDetailsInput!): Order!

  """Get all order status changes together with its location"""
  orderStatusHistory(order: OrderDetailsInput!): [OrderStatusChange!]!

  """"""
  supportDetails: SupportDetails!
}

"""Developer integrating with foodeli"""
type Developer {
  """
  key to be used inside headers of developer request for example
  ## Request
  \`\`\`;
apiKey: j1248879rhr270\`\`\`
  """
  apiKey: String!

  """Name of the developer integration"""
  name: String!

  """"""
  ownerUsername: String!

  """Restaurants allowed to use this developer integration"""
  restaurantsUsernames: [String!]!
}

""""""
type TenantBaseQuery {
  """"""
  me: Tenant!
}

""""""
input DriverAddInput {
  """"""
  deliveryRate: Int

  """"""
  PESEL: String

  """"""
  credentials: PersonAddInput!

  """"""
  ownerUsername: String!
}

""""""
type OpeningHours {
  """"""
  day: Week!

  """"""
  from: String!

  """"""
  to: String!
}

""""""
input DeveloperOrderFilter {
  """restaurant owner username"""
  restaurant: String

  """"""
  status: [OrderStatus!]

  """"""
  payment: PaymentType

  """Period"""
  period: TimeFilter
}

"""Query the access of the user to the app"""
type AccessQuery {
  """Return roles of the user"""
  roles: [Role!]!
}

""""""
input RemoveVehicle {
  """"""
  name: String!
}

""""""
input CreateDriverWorkSchedule {
  """"""
  date: String!

  """"""
  start: String!

  """"""
  end: String!
}

""""""
input RestaurantAddOrder {
  """"""
  extraDetails: String

  """Big order package"""
  bigOrder: Boolean

  """Number to the client"""
  clientPhoneNumber: String

  """When the order will be ready"""
  readyIn: Int!

  """contactless delivery"""
  contactLess: Boolean

  """"""
  deliveryOnHour: Boolean

  """"""
  total: Int!

  """"""
  address: AddressAddInput!

  """Specify payment type"""
  payment: PaymentType!
}

""""""
interface Dated {
  """"""
  createdAt: Date!
}

""""""
enum Week {
  """"""
  TUESDAY

  """"""
  WEDNESDAY

  """"""
  THURSDAY

  """"""
  FRIDAY

  """"""
  SATURDAY

  """"""
  SUNDAY

  """"""
  MONDAY
}

""""""
input OrderUpdateInput {
  """"""
  deliveryOnHour: Boolean

  """"""
  driver: String

  """Number to the client"""
  clientPhoneNumber: String

  """"""
  total: Int

  """"""
  restaurant: String

  """"""
  extraDetails: String

  """"""
  bigOrder: Boolean

  """"""
  payment: PaymentType

  """"""
  contactLess: Boolean

  """"""
  status: OrderStatus

  """"""
  driverArrives: Date

  """"""
  settled: String

  """"""
  id: ObjectId!

  """"""
  readyAt: String

  """"""
  address: AddressUpdateInput
}

""""""
input DriverUpdateInput {
  """"""
  credentials: PersonUpdateInput

  """"""
  ownerUsername: String!

  """"""
  deliveryRate: Int

  """"""
  PESEL: String
}

""""""
input CreateAddon {
  """Name as seen in the menu"""
  name: String!

  """Price in smallest currency available unit"""
  price: Int!
}

""""""
input CreateAddonSelect {
  """if multiple select is available please select this flag"""
  multiple: Boolean

  """name of the addon select category. for example select sauce"""
  name: String!
}

""""""
type Address {
  """"""
  city: String

  """"""
  country: String

  """"""
  flat: String

  """"""
  location: PureLocation

  """"""
  street: String!

  """"""
  unit: String!
}

""""""
input UserBasicData {
  """"""
  username: String!

  """"""
  password: String!
}

"""All mutations for tenant and members<br>"""
type TenantMutation {
  """"""
  admin: AdminMutation

  """internal developer mutation"""
  developer: DeveloperMutation

  """"""
  driver: DriverMutation

  """"""
  restaurant: RestaurantMutation

  """Internal tenant mutations"""
  tenant: TenantBaseMutation
}

"""Order as visible for developer integration"""
type DeveloperOrder {
  """"""
  address: Address!

  """the order is bigger than usually"""
  bigOrder: Boolean

  """Delivery is left in front of the door."""
  contactLess: Boolean

  """"""
  createdAt: Date!

  """determines if driver is late"""
  driverLate: Boolean

  """extra details of an order"""
  extraDetails: String

  """"""
  id: ObjectId!

  """"""
  payment: PaymentType!

  """"""
  restaurant: DeveloperRestaurant!

  """"""
  status: OrderStatus!
}

"""Details of the restaurant visible to developer"""
type DeveloperRestaurant implements Addressed {
  """"""
  address: Address!

  """"""
  name: String!

  """"""
  open: [OpeningHours!]!

  """Username of the owner and primary key"""
  ownerUsername: String!

  """"""
  phone: String!
}

""""""
type MenuMutation {
  """"""
  addAddon(addon: CreateAddon!): Boolean

  """"""
  addAddonSelect(addonSelect: CreateAddonSelect!): Boolean

  """"""
  addCategory(category: CreateDishCategory!): Boolean

  """"""
  addDish(dish: CreateDish!): Boolean

  """"""
  addMenu(menu: CreateMenu!): Boolean

  """"""
  removeAddon(name: String!): Boolean

  """"""
  removeAddonSelect(name: String!): Boolean

  """"""
  removeCategory(name: String!): Boolean

  """"""
  removeDish(name: String!): Boolean

  """"""
  removeMenu(menu: RemoveMenu!): Boolean

  """"""
  updateAddon(addon: UpdateAddon!): Boolean

  """"""
  updateAddonSelect(addonSelect: UpdateAddonSelect!): Boolean

  """"""
  updateCategory(category: CreateDishCategory!): Boolean

  """"""
  updateDish(dish: UpdateDish!): Boolean

  """"""
  updateMenu(menu: UpdateMenu!): Boolean
}

""""""
scalar ObjectId

"""Current system load."""
enum OrderLoad {
  """We will deliver orders right after delivery"""
  LOW

  """The load is higher, but still things going normal"""
  NORMAL

  """The load is higher so you can expect longer time of delivery"""
  HIGH

  """You can expect delivery time very close to maximum delivery time"""
  OVERLOAD
}

""""""
input UpdateTenant {
  """"""
  address: AddressUpdateInput

  """"""
  phone: String

  """"""
  name: String

  """"""
  ownerUsername: String!
}

""""""
input PersonUpdateInput {
  """extra details"""
  details: String

  """"""
  address: AddressUpdateInput

  """"""
  firstName: String

  """"""
  phone: String

  """"""
  lastName: String
}

"""Developer mutations"""
type DeveloperMutation {
  """"""
  addOrder(order: OrderAddInput!): String
}

schema{
	query: Query,
	mutation: Mutation
}
`;
export const potus = `
""""""
type AdminQuery {
  """"""
  driverByPhone(detailsDriver: DetailsDriver): Driver!

  """"""
  listDriver: [Driver!]

  """"""
  listOrders: [Order!]!

  """"""
  lookUpAddress(query: String!): [Address!]!

  """"""
  orderByRefId(detailsOrder: DetailsOrder!): Order!
}

""""""
type Mutation {
  """"""
  adminMutation: AdminMutation

  """"""
  driverMutation: DriverMutation
}

""""""
input UpdateDriver {
  """"""
  truckNumber: String

  """"""
  trailerNumber: String

  """"""
  firstName: String

  """"""
  lastName: String

  """"""
  phone: String

  """Personal identification number or passport number"""
  idNumber: String
}

""""""
input UpdateOrder {
  """"""
  refId: String
}

""""""
input CreateDriver {
  """"""
  lastName: String

  """"""
  phone: String!

  """Personal identification number or passport number"""
  idNumber: String

  """"""
  truckNumber: String!

  """"""
  trailerNumber: String

  """"""
  firstName: String
}

""""""
input CreateLocation {
  """"""
  longitude: Float!

  """"""
  latitude: Float!
}

""""""
type AdminMutation {
  """"""
  createAddress(createAddress: CreateAddress!): String

  """"""
  createDriver(createDriver: CreateDriver!): String

  """"""
  createOrder(createOrder: CreateOrder!): String

  """"""
  removeAddress(detailsAddress: DetailsAddress!): Boolean

  """"""
  removeDriver(detailsDriver: DetailsDriver!): Boolean

  """"""
  removeOrder(detailsOrder: DetailsOrder!): Boolean

  """"""
  updateAddress(detailsAddress: DetailsAddress!, updateAddress: UpdateAddress!): Boolean

  """"""
  updateDriver(updateDriver: UpdateDriver!, detailsDriver: DetailsDriver!): Boolean

  """"""
  updateOrder(updateOrder: UpdateOrder!, detailsOrder: DetailsOrder!): Boolean
}

""""""
type Order {
  """"""
  checkIns: [CheckIn!]!

  """"""
  createdAt: String!

  """"""
  driver: Driver

  """"""
  loadAddress: Address!

  """"""
  pieces: Int

  """The date order should be finalized"""
  plannedEndDate: String!

  """Reference id of order"""
  refId: String!

  """"""
  unloadAddress: Address!

  """Weight in kilograms"""
  weight: Int
}

""""""
type DriverMutation {
  """"""
  createCheckIn(createCheckIn: CreateCheckIn!): String
}

""""""
input CreateAddress {
  """"""
  zipCode: String!

  """"""
  countryCode: String!

  """"""
  name: String

  """"""
  street: String!

  """"""
  unit: String!

  """"""
  city: String!
}

""""""
input DetailsAddress {
  """"""
  addressKey: String!
}

""""""
type CheckIn {
  """"""
  checkInType: CheckInType

  """"""
  createdAt: String!

  """"""
  driver: Driver!

  """"""
  location: Location!

  """"""
  order: Order!
}

""""""
input CreateCheckIn {
  """"""
  createLocation: CreateLocation!

  """"""
  checkInType: CheckInType
}

""""""
input DetailsOrder {
  """"""
  refId: String!
}

""""""
type Address {
  """"""
  city: String!

  """"""
  countryCode: String!

  """"""
  location: Location

  """"""
  name: String

  """"""
  street: String!

  """"""
  string: String

  """"""
  unit: String!

  """"""
  zipCode: String!
}

"""Truck driver"""
type Driver {
  """"""
  checkIns: [CheckIn!]!

  """"""
  firstName: String

  """Personal identification number or passport number"""
  idNumber: String

  """"""
  lastName: String

  """"""
  phone: String!

  """"""
  trailerNumber: String

  """"""
  truckNumber: String!
}

""""""
input CreateOrder {
  """"""
  plannedEndDate: String!

  """"""
  weight: Int

  """"""
  loadAddressKey: DetailsAddress!

  """"""
  unloadAddressKey: DetailsAddress!

  """"""
  pieces: Int

  """"""
  refId: String!
}

""""""
type Query {
  """"""
  adminQuery: AdminQuery

  """"""
  driverQuery: DriverQuery
}

""""""
type DriverQuery {
  """"""
  driverOrderByRefId(detailsOrder: DetailsOrder!): DriverOrder!

  """"""
  driverOrders: [DriverOrder!]!
}

""""""
input UpdateAddress {
  """"""
  countryCode: String

  """"""
  name: String

  """"""
  street: String

  """"""
  unit: String

  """"""
  city: String

  """"""
  zipCode: String
}

""""""
input DetailsDriver {
  """"""
  phone: String
}

""""""
type DriverOrder {
  """"""
  checkIns: [CheckIn!]!

  """"""
  loadAddress: Address!

  """"""
  pieces: Int

  """The date order should be finalized"""
  plannedEndDate: String!

  """Reference id of order"""
  refId: String!

  """"""
  unloadAddress: Address!

  """Weight in kilograms"""
  weight: Int
}

""""""
type Location {
  """"""
  latitude: Float!

  """"""
  longitude: Float!
}

"""Kind of check-in"""
enum CheckInType {
  """"""
  UNLOADED

  """"""
  ARRIVAL_NOTICE

  """"""
  LOADED

  """"""
  UNLOAD_ARRIVAL_NOTICE
}

schema{
	query: Query,
	mutation: Mutation
}
`;
