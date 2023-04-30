import {Plus, Icon, IconProps} from "phosphor-react-native";

type Props = IconProps & {
    name: string;
};

export function DietIcon({name, color, size}: Props) {
    if(name) {
        return <Plus color={color} size={size} />
    } else {
        return null;
    }
}
