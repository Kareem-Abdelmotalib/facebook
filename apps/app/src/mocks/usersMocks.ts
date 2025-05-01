export default {
  getUsers() {
    const names = [
      "Ahmed Tarek", "Mariam Hossam", "Youssef Gamal", "Salma Adel", "Omar Sherif",
      "Nourhan Mostafa", "Khaled Mahmoud", "Esraa Saeed", "Mohamed Yassin", "Farah Sameh",
      "Tamer Hany", "Aya Khaled", "Hussein Ali", "Reem Fathy", "Ziad Amr",
      "Laila Ahmed", "Mostafa Ehab", "Habiba Nour", "Abdelrahman Walid", "Dina Adel"
    ];

    return names.map((name, index) => ({
      id: `user-${index + 1}`,
      name
    }));
  }
};
