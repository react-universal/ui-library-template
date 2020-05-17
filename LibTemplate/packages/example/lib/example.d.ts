/// <reference types="react" />
export interface Props {
    text: string;
}
declare const Example: {
    ({ text }: Props): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            text: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export default Example;
