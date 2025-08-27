const user = {
  id: 0,
  name: '管理员',
};
const role = 'admin';

export default {
  'GET /api/v1/login': (_, res) => {
    res.json({
      success: true,
      data: user,
      errorCode: 0,
    });
  },
  'GET /api/v1/getUser': (_, res) => {
    res.json({
      success: true,
      data: user,
      errorCode: 0,
    });
  },
  'GET /api/v1/getRole': (_, res) => {
    res.json({
      success: true,
      data: role,
      errorCode: 0,
    });
  },
};
