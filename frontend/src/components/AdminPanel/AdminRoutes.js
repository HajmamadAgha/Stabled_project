import { Route, Routes } from 'react-router-dom';
import SalesReports from './SalesReports/SalesReports';
import UserManagement from './UserManagement/UserManagement';
import CharacterOptions from './CharacterOptions/CharacterOptions';
import CreateEditPackages from './CreateEditPackages/CreateEditPackages';
import LiveChatIntegration from './LiveChatIntegration/LiveChatIntegration';
import NewStyles from './NewStyles/NewStyles';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Welcome to the Admin Panel</h2>} />
      <Route path="/sales-reports" element={<SalesReports />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/character-options" element={<CharacterOptions />} />
      <Route path="/create-edit-packages" element={<CreateEditPackages />} />
      <Route path="/livechat-integration" element={<LiveChatIntegration />} />
      <Route path="/new-styles" element={<NewStyles />} />
    </Routes>
  );
};

export default AdminRoutes;
