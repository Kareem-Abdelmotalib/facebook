const egyptianGirlsNames = [
  "Mariam Ahmed",
  "Sara Mostafa",
  "Farida Ali",
  "Habiba Mahmoud",
  "Laila Hassan",
  "Nada Youssef",
  "Salma Adel",
  "Yasmin Khaled",
  "Dina Magdy",
  "Nourhan Amr"
];

export default {
  getContacts: () =>
    egyptianGirlsNames.map((name, index) => ({
      id: `user-${index + 1}`,
      name,
      isOnline: true
    }))
};
