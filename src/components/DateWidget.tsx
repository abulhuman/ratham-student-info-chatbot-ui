import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import DateOptions from "./DateOptions";

export const DateWidget: IWidget = {
    props: {},
    mapStateToProps: [],
    widgetName: 'pickSlot',
    widgetFunc: (props: JSX.ElementAttributesProperty) => <DateOptions {...props} />
  }