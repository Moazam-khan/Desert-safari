import {Button as AntdBtn, ButtonProps} from 'antd';

interface BtnProps extends ButtonProps {
  secondary?: boolean;
}

const Button = ({secondary, style, ...rest}: BtnProps) => {
  return (
    <AntdBtn
      style={{
        ...style,
      }}
      type={'primary'}
      {...rest}
    />
  );
};

export default Button;
