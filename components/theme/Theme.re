type t = {
  colors: Theme_Colors.t,
  button: Button_Theme.t,
  text: Text_Theme.t,
  space: Theme_Space.t,
};

[@genType]
let defaultTheme: t = {
  colors: Theme_Colors.light,
  button: Button_Theme.defaultTheme,
  text: Text_Theme.defaultTheme,
  space: Theme_Space.defaultTheme,
};

let themeContext = React.createContext(defaultTheme);

let makeProps = (~value: t=defaultTheme, ~children, ()) => {
  "value": value,
  "children": children,
};

let make = React.Context.provider(themeContext);

[@genType]
let default = make;