import './index.scss';
import { X } from 'lucide-react';
import { Children, ReactNode } from 'react';
import { AlertTypes } from '../../../types';
interface IProps {
    title: string;
    type?:AlertTypes;
    description?: string;
    icon:ReactNode,
    children?:ReactNode;


}
const Alert = ({children, icon,title, type="alert-default",description}:IProps) => {

    return (
        <div className={type}>
            <div className="alert-header">
                <div className="title">
                 <span>   {icon}</span>
                    <h4> {title}</h4>
                </div>
                  <X  className="close" size={20}/>
            </div>
         
          {children?children:    <p>{description}</p>}
        </div>
    )
}

export default Alert
