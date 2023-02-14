import React, {PureComponent} from "react";
import { useEmotionCss } from '@ant-design/use-emotion-css';


class SignUp extends PureComponent {


    render() {

        const containerClassName = useEmotionCss(() => {
            return {
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              overflow: 'auto',
              backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
              backgroundSize: '100% 100%',
            };
          });
          
        return <div className={containerClassName}>todo</div>
    }
}