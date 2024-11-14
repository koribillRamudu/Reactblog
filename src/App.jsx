import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const BlogList = lazy(() => import('./components/BlogList/BlogList'));
const PostDetail = lazy(() => import('./components/BlogPost/BlogPost'));
const Editor = lazy(() => import('./components/PostEditor/PostEditor'));
// const Profile = lazy(() => import('./components/Profile/Profile'));
// const Settings = lazy(() => import('./components/Settings/Settings'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/editor" element={<Editor />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
