import Login from "../Login/Login";

export const formObj = {
  customBasic: {
    title: "Custom Basic",
    default: true,
    weight: 0,
    components: {
      textfield: true,
      textarea: true,
      email: true,
      phoneNumber: true,
    },
  },
  vikas: {
    title: "Custom Vikas",
    default: true,
    weight: 0,
    components: {
      login: {
        title: "Login",
        key: "login",
        icon: "terminal",
        getComponent: () => <Login />,
        schema: {
          label: "Login",
          type: "container", // Use container or any other suitable type
          key: "loginContainer",
          input: false,
          components: [
            {
              label: "Email",
              type: "textfield",
              key: "email",
              input: true,
              placeholder: "Enter your email",
              customClass: "text-red-500",
            },
            {
              label: "Password",
              type: "textfield",
              key: "password",
              input: true,
              placeholder: "Enter your password",
              password: true,
            },
            {
              type: "button",
              key: "loginButton",
              label: "Login",
              input: true,
              theme: "primary",
            },
          ],
        },
      },
    },
  },
  customAdvanced: {
    title: "Custom Advanced",
    default: true,
    weight: 0,
    components: {
      textfield: true,
      textarea: true,
      email: true,
      phoneNumber: true,
    },
  },
  custom: {
    title: "Custom Smart Doc Section",
    weight: 10,
    components: {
      login: {
        title: "Login",
        key: "login",
        icon: "terminal",
        getComponent: () => <Login />, // Render your custom component
        schema: {
          label: "Login",
          type: "container", // Use container or any other suitable type
          key: "loginContainer",
          input: false,
          components: [
            {
              label: "Email",
              type: "textfield",
              key: "email",
              input: true,
              placeholder: "Enter your email",
            },
            {
              label: "Password",
              type: "textfield",
              key: "password",
              input: true,
              placeholder: "Enter your password",
              password: true,
            },
            // Optionally include login button here
            {
              type: "button",
              key: "loginButton",
              label: "Login",
              input: true,
              theme: "primary",
            },
          ],
        },
      },
    },
  },
};
