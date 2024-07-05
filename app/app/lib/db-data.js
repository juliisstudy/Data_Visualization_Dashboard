const users = [
  {
    id: "34adf4ba-ff8a-40b5-a0a2-674c8fb3d1c4",
    name: "User",
    email: "user@mail.com",
    password: "123456",
  },
];

const players = [
  {
    id: "152c871b-d1cc-4e6d-b6b7-2cd9bd99a87c",
    name: "Jillian Scott",
    email: "jillian@scott.com",
    image_url: "/users/Jillian-Scott.jpg",
  },
  {
    id: "1790234d-9fc4-4e46-acba-eccff61ae63f",
    name: "Bonnie George",
    email: "bonnie@george.com",
    image_url: "/users/Bonnie-George.jpg",
  },
  {
    id: "152c871b-d1cc-4e6d-b6b7-2cd9bd99a87c",
    name: "Tracey Ellis",
    email: "tracey@ellis.com",
    image_url: "/users/Tracey-Ellis.jpg",
  },
  {
    id: "10cabd1e-e97e-44e9-b692-3ac7e9e4bb5c",
    name: "Zoe Hunter",
    email: "Zoe@Hunter.com",
    image_url: "/users/Zoe-Hunter.jpg",
  },
  {
    id: "a3594bc1-289e-46a7-8367-61c28025f371",
    name: "Zoey Campbell",
    email: "zoey@campbell.com",
    image_url: "/users/Zoey-Campbell.jpg",
  },
  {
    id: "a381907d-a56c-4a3a-b7e4-148784acb9bc",
    name: "Miriam Johnson",
    email: "miriam@johnson.com",
    image_url: "/users/Miriam-Johnson.jpg",
  },
  {
    id: "1b23a305-96e6-48f3-8d0b-934ff54d7268",
    name: "Thomas Ellis",
    email: "thomas@ellis.com",
    image_url: "/users/Thomas-Ellis.jpg",
  },
  {
    id: "0a621efa-82e4-4d48-9310-d884f0206ddf",
    name: "Felecia Howard",
    email: "felecia@howard.com",
    image_url: "/users/Felecia-Howard.jpg",
  },
  {
    id: "e4d8c753-1bd7-4e1c-9c69-3752b799144f",
    name: "Zoey Campbell",
    email: "zoey@campbell",
    image_url: "/users/Zoey-Campbell.jpg",
  },
  {
    id: "db10e408-c6da-449c-a92a-0c7ec62ed1d7",
    name: "Lillian Clark",
    email: "lillian@clark.com",
    image_url: "/users/LillianClark.jpg",
  },
  {
    id: "c33c235e-f208-47df-8cff-ab62780b538a",
    name: "Jonathan Lambert",
    email: "jonathan@lambert.com",
    image_url: "/users/JonathanLambert.jpg",
  },
  {
    id: "26f7c1f2-f06a-4707-be01-905c9a801672",
    name: "Eduardo Fleming",
    email: "eduardo@fleming.com",
    image_url: "/users/EduardoFleming.jpg",
  },
  {
    id: "ec522414-bd7d-4a82-9445-f0cfaccb9f80",
    name: "Julia Nguyen",
    email: "julia@nguyen.com",
    image_url: "/users/JuliaNguyen.jpg",
  },
  {
    id: "62bd6c5a-aaa8-41f1-8e12-77acc9d637a5",
    name: "Penny Curtis",
    email: "penny@curtis",
    image_url: "/users/PennyCurtis.jpg",
  },
  {
    id: "cdfb3deb-c663-4e57-9c9a-a88389d7ba57",
    name: "Yolanda Mckinney",
    email: "yolanda@mckinney",
    image_url: "/users/YolandaMckinney.jpg",
  },
];

const subscribers = [
  {
    user_id: players[0].id,
    amount: 150,
    status: "active",
    date: "2024-05-01",
  },
  {
    user_id: players[0].id,
    amount: 150,
    status: "active",
    date: "2024-06-01",
  },
  {
    user_id: players[1].id,
    amount: 300,
    status: "active",
    date: "2024-05-01",
  },
  {
    user_id: players[3].id,
    amount: 150,
    status: "active",
    date: "2024-07-01",
  },
  {
    user_id: players[2].id,
    amount: 150,
    status: "active",
    date: "2024-10-01",
  },
  {
    user_id: players[4].id,
    amount: 0,
    status: "cancelled",
    date: "2024-11-01",
  },
  {
    user_id: players[0].id,
    amount: 0,
    status: "cancelled",
    date: "2024-12-01",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

const numberOfPlayer = [
  { month: "Jan", users: 2000 },
  { month: "Feb", users: 1800 },
  { month: "Mar", users: 2200 },
  { month: "Apr", users: 2500 },
  { month: "May", users: 2300 },
  { month: "Jun", users: 3200 },
  { month: "Jul", users: 3500 },
];

const numberOfSubscribers = [
  { month: "Jan", users: 500 },
  { month: "Feb", users: 400 },
  { month: "Mar", users: 450 },
  { month: "Apr", users: 500 },
  { month: "May", users: 400 },
  { month: "Jun", users: 700 },
  { month: "Jul", users: 500 },
];

module.exports = {
  users,
  players,
  subscribers,
  revenue,
  numberOfPlayer,
  numberOfSubscribers,
};
