import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { SelectContent, SelectTrigger, SelectValue,SelectItem } from '../ui/select';

const CommonForm = ({formControls}) => {

    function renderInputsByComponentType(getControlItem){

        let element = null;

        switch (getControlItem.componentType) {

            case 'input':
                element = (<Input
                    name = {getControlItem.name}
                    placeholder = {getControlItem.placeholder}
                    id = {getControlItem.name}
                    type = {getControlItem.type}
                />)
                break;


            case 'select':
                element =( 
                    <select>
                        
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.placeholder}/>
                        </SelectTrigger>

                        <SelectContent>
                            {getControlItem.options && getControlItem.options.length > 0 ? getControlItem.options.map((optionItem) => (
                                <SelectItem key={optionItem.id} value={optionItem.id}>
                                {optionItem.label}
                                </SelectItem>
                            ))
                            : null}
                        </SelectContent>

                    </select>
                )
                break;


            case 'textarea':
                element = (<Input
                    name = {getControlItem.name}
                    placeholder = {getControlItem.placeholder}
                    id = {getControlItem.name}
                    type = {getControlItem.type}
                />)
                break; 

        
            default:
                 element =( <Input
                    name = {getControlItem.name}
                    placeholder = {getControlItem.placeholder}
                    id = {getControlItem.name}
                    type = {getControlItem.type}
                />)
                break;
        }

        return element;


    }

    return (

            <form action="">
                <div className='flex flex-col gap-3'>
                    {
                        formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
                            <Label>{controlItem.label}</Label>
                            {
                                renderInputsByComponentType(controlItem)
                            }
                        </div>)
                    }
                </div>
            </form>
        
    );
};

export default CommonForm;