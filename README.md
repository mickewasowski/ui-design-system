# UI Design System

### This is a library which provides essential UI components

Here you can find:
1. Button component with 3 variants, fully open for customization
2. Input field with floating label, also fully open for customization
3. ThemeProvider - provides toggle from light to dark and vice versa


### Components

1. Button component - this is a ready-to-use out of the box component with loading and disabled states supported.
Below is a sample of how you could use it:
```js
<Button
    variant={ButtonEnum.Primary}
    additionalClasses="btn-test-class"
    loading={true}
    loader={{
        type: LoaderEnum.Dots,
        size: 10,
        mainColor: "rgb(140, 0 , 0)",
        subColor: "rgb(180, 180, 10)"
    }}
    disabled={false}
    clickHandler={handleClick}
    id="your-id"
    type="submit"
    {...whatever-else-attributes-you-need}
>
    Primary button
</Button>
```

2. Input component - this is an input component with floating label when focused/has value. It provides also an error state.
Example:
```js
<Input 
    input={{
        type: "text",
        value: "some value",
        changeHandler: (e) => { /* do something */ },
        attributes: {
            id: "some id",
            { /* whatever else you might need */}
        }
    }}
    label={{
        text: "your label",
        name: "some name"
    }}
    borderColor: "rgb(250, 10, 10)"
    textColor: "rgb(10, 100, 200)"
    error={{
        show: true,
        text: "your error text"
    }}
/>
```

3. ThemeProvider - simple context provider exposing the currently selected theme and a toggle function. Provides light and dark theme selection.
Example usage:
```js
// inside a functional component
const {theme, toggle} = useTheme();
```


### How to use the library
Since this library is for educational purposes only it was not uploaded to npm.
Instead how I suggest you use it is as follows:

// lib setup
1. Clone this repo locally and navigate to the root folder
2. Run `npm install`
3. Run `npm run build`
4. Run `npm link`


// your local test project
1. Run `npm link ui-design-system`
2. Import whichever component you need as follows:
`import {Button, Input, ThemeProvider, ButtonEnum, LoaderEnum, useTheme} from "ui-design-system"` 
