import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { ToastContainer } from 'react-toastify';
import { WhatsAppWidget} from 'react-whatsapp-widget'
import "react-whatsapp-widget/dist/index.css";
import 'react-toastify/dist/ReactToastify.css';
import LoadingAnimation from './components/loadingAnimation';

function App() {
  return (
    <UserContextProvider>
      {/* <LoadingAnimation/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
      <ToastContainer/>
      <WhatsAppWidget
          // CompanyIcon={CTBAIcon}
          replyTimeText="we will reply in the next 48 hours"
          message="Hello! 👋🏼 What can we do for you ?"
          companyName="Safricon&Sagrico"
          SendButton="Send"
          phoneNumber="+31613590423"
          
        />
    </UserContextProvider>
  );
}

export default App;
