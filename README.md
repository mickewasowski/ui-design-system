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
Below are the colors used for each component and it's states:
``` scss
  --btn-primary-blue: rgb(0, 90, 205);
  --btn-primary-hover: rgb(255, 255, 255);
  --btn-secondary-bg: rgb(255, 255, 255);
  --btn-secondary-border: rgb(0, 191, 70);
  --btn-secondary-hover-bg: rgb(0, 200, 0);
  --btn-secondary-hover-text: rgb(255, 255, 255);
  --btn-underline-border: rgb(63, 136, 152);
  --btn-underline-hover: rgb(206, 89, 0);
  --btn-disabled-bg: rgb(180, 180, 180);
  --btn-disabled-text: rgb(255, 255, 255);
  --btn-disabled-border: rgb(102, 95, 95);
  --input-wrapper-border: rgb(180, 180, 180);
  --input-wrapper-focus: rgb(0, 90, 205);
  --input-wrapper-error: rgb(255, 10, 10);
  --input-wrapper-bg: rgb(255, 255, 255);
  --input-text: rgb(0, 0, 0);
  --label-inactive: rgb(180, 180, 180);
  --dots-middle: rgb(0, 0, 0);
  --dots-outer: rgb(50, 50, 50);
  --spiner-top-border: rgb(0, 0, 0);
  --spinner-bg: rgb(100, 100, 100);
``` 
When you implement light/dark themes I highly suggest you override these variables to your liking.



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

