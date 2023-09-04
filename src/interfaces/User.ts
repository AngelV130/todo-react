interface User {
    id: number;
    name: string;
    username: string;
    city: string;
    phone: number;
    address:Address;
}
interface Address {
    street: string;
    suite: string;
    city: string;
}