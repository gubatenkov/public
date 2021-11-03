import sidebarReducer from 'features/sidebarSlice';
import userReducer from 'features/userSlice';

const rootReducer = {
  sidebar: sidebarReducer,
  user: userReducer,
};

export default rootReducer;
