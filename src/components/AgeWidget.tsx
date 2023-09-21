import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import SelectAge from "./SelectAge";

export const AgeWidget: IWidget = {
    props: {},
    mapStateToProps: [],
    widgetName: 'selectAge',
    widgetFunc: (props: JSX.IntrinsicAttributes) => <SelectAge {...props} />
  }