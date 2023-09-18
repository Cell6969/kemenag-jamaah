export const handleRegisPress = async (
  fullname,
  username,
  noId,
  password,
  confirmPassword,
  navigation
) => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check the username

        // Check Password is same with Confirm Password
        if (password === confirmPassword) {
          resolve();
        } else {
          reject("Password and confirm password not match");
        }
      }, 1000);
    });
    navigation.navigate("Login");
  } catch (error) {
    console.log(error);
  }
};
