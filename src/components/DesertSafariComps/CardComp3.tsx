import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";
import Text from '../Text';

const CardComp3 = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };



  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '50px',
      backgroundColor: 'white',
    }}>
      <Collapse
        accordion
        items={items}
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition="start"
        expandIcon={expandIcon} style={{
          width: '1140px',
          color: 'black',
        }}>
      </Collapse>
    </div>
  )
};




const expandIcon = (panelProps: any) => {
  const { isActive } = panelProps;
  return (
    <>

      {isActive ? (
        <MinusOutlined width={'24px'} height={'24px'}
          style={{
            color: 'red',
          }} />
      ) : (
        <PlusOutlined width={'24px'} height={'24px'} style={{
          color: 'yellow',
        }} />
      )}</>

  );
};


const AnswerText = () => {


  return <Text style={{
    color: '#666666',
    fontFamily: 'Arial',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
  }}>Desert Safari in Dubai is one of the most significant ideas for the excursion. This is also known as dune bashing i.e. a term used to define the riding throwing the irregular sandy terrains. During this vacation, travelers can get the best fun time while enjoying Arab delicacies and various shows for entertainment. To know more about the different packages for this holiday in Dubai, connect with Desert Safari UAE</Text>;
}



const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>What is Desert Safari Dubai?</Text>,
    children: <AnswerText />,
  },
  {
    key: '2',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>What can I expect in a desert safari?</Text>,
    children: <AnswerText />,

  },
  {
    key: '3',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>What is the best desert safari in Dubai?</Text>,
    children: <AnswerText />,
  },
  {
    key: '4',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>Which Desert Safari Package, I will choose for my Family?</Text>,
    children: <AnswerText />,
  },
  {
    key: '5',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>What is included in Desert Safari Dubai?</Text>,
    children: <AnswerText />,
  },
  {
    key: '6',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>Is desert safari in Dubai safe?</Text>,
    children: <AnswerText />,
  },
  {
    key: '7',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>How long does desert safari take?</Text>,
    children: <AnswerText />,
  },
  {
    key: '8',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>What do you wear on a desert safari in Dubai ?</Text>,
    children: <AnswerText />,
  },
  {
    key: '9',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>What time does desert safari start ?</Text>,
    children: <AnswerText />,
  },
  {
    key: '10',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>Where do you go in the desert ?</Text>,
    children: <AnswerText />,
  },
  {
    key: '11',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>Can I wear shorts in the desert safari ?</Text>,
    children: <AnswerText />,
  },
  {
    key: '12',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>How far is desert safari from Dubai ?</Text>,
    children: <AnswerText />,
  },
  {
    key: '13',
    label: <Text style={{
      width: '100%',
      color: '#666666',
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '550',
      lineHeight: 'normal',
      letterSpacing: '0.5px',
    }}>Is sandboarding difficult ?</Text>,
    children: <AnswerText />,
  },

];

export default CardComp3;













