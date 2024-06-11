"use strict";

var users = [{
  id: "34adf4ba-ff8a-40b5-a0a2-674c8fb3d1c4",
  name: "User",
  email: "user@mail.com",
  password: "123456"
}];
var userlist = [{
  id: "152c871b-d1cc-4e6d-b6b7-2cd9bd99a87c",
  name: "Jillian Scott",
  email: "jillian@scott.com",
  image_url: "/users/Jillian-Scott.jpg"
}, {
  id: "1790234d-9fc4-4e46-acba-eccff61ae63f",
  name: "Bonnie George",
  email: "bonnie@george.com",
  image_url: "/users/Bonnie-George.jpg"
}, {
  id: "152c871b-d1cc-4e6d-b6b7-2cd9bd99a87c",
  name: "Tracey Ellis",
  email: "tracey@ellis.com",
  image_url: "/users/Tracey-Ellis.jpg"
}, {
  id: "10cabd1e-e97e-44e9-b692-3ac7e9e4bb5c",
  name: "Zoe Hunter",
  email: "Zoe@Hunter",
  image_url: "/users/Zoe-Hunter.jpg"
}, {
  id: "a3594bc1-289e-46a7-8367-61c28025f371",
  name: "Zoey Campbell",
  email: "zoey@campbell",
  image_url: "/users/Zoey-Campbell.jpg"
}, {
  id: "a381907d-a56c-4a3a-b7e4-148784acb9bc",
  name: "Miriam Johnson",
  email: "miriam@johnson",
  image_url: "/users/Miriam-Johnson.jpg"
}, {
  id: "1b23a305-96e6-48f3-8d0b-934ff54d7268",
  name: "Thomas Ellis",
  email: "thomas@ellis.com",
  image_url: "/users/Thomas-Ellis.jpg"
}, {
  id: "0a621efa-82e4-4d48-9310-d884f0206ddf",
  name: "Felecia Howard",
  email: "felecia@howard.com",
  image_url: "/users/Felecia-Howard.jpg"
}];
var subscribers = [{
  user_id: userlist[0].id,
  amount: 15,
  status: "active",
  date: "2024-05-01"
}, {
  user_id: userlist[0].id,
  amount: 15,
  status: "active",
  date: "2024-06-01"
}, {
  user_id: userlist[1].id,
  amount: 30,
  status: "active",
  date: "2024-05-01"
}, {
  user_id: userlist[3].id,
  amount: 15,
  status: "active",
  date: "2024-07-01"
}, {
  user_id: userlist[2].id,
  amount: 15,
  status: "active",
  date: "2024-10-01"
}, {
  user_id: userlist[4].id,
  amount: 15,
  status: "Suspend",
  date: "2024-11-01"
}, {
  user_id: userlist[0].id,
  amount: 15,
  status: "Suspend",
  date: "2024-12-01"
}];
var revenue = [{
  month: "Jan",
  revenue: 2000
}, {
  month: "Feb",
  revenue: 1800
}, {
  month: "Mar",
  revenue: 2200
}, {
  month: "Apr",
  revenue: 2500
}, {
  month: "May",
  revenue: 2300
}, {
  month: "Jun",
  revenue: 3200
}, {
  month: "Jul",
  revenue: 3500
}, {
  month: "Aug",
  revenue: 3700
}, {
  month: "Sep",
  revenue: 2500
}, {
  month: "Oct",
  revenue: 2800
}, {
  month: "Nov",
  revenue: 3000
}, {
  month: "Dec",
  revenue: 4800
}];
module.exports = {
  users: users,
  userlist: userlist,
  subscribers: subscribers,
  revenue: revenue
};