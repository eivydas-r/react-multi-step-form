import Button from "../Components/Button/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
};

const Template = args => <Button {...args}/>

export const Red = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md",
    borderRadius: "0px",
}

export const Green = Template.bind({});
Green.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "md",
    borderRadius: "0px",
}

export const Small = Template.bind({});
Small.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "sm",
    borderRadius: "0px",
}

export const Large = Template.bind({});
Small.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "lg",
    borderRadius: "0px",
}