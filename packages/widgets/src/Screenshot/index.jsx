import { Button, Flex } from 'antd';

const Screenshot = ({ view }) => {
  const takeScreenshot = () => {
    view.takeScreenshot().then(function (screenshot) {
      const link = document.createElement('a');
      link.href = screenshot.dataUrl;
      link.download = 'screenshot.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Flex justify="space-between" align="center">
      <Button type="primary" onClick={takeScreenshot} block>
        截图
      </Button>
    </Flex>
  );
};
export default Screenshot;
