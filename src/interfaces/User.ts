interface User {
    id?: number;
    name?: string;
    username?: string;
    city?: string;
    phone?: number;
    address?:Address;
    email:string;
    password:string
}
interface Address {
    street: string;
    suite: string;
    city: string;
}