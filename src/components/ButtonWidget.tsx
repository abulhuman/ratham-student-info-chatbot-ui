import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import Button from "./Button";

export const ButtonWidget: IWidget = {
    props: {},
    mapStateToProps: [],
    widgetName: 'gotIt',
    widgetFunc: (props) => (
      <Button
        {...props}
        text='Got it!'
        onClick={props.actionProvider.handleGotIt}
      />
    )
}