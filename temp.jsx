{/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        Open Route - for Only Non Logged in User
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        
        Private Route - for Only Logged in User
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >

          Route for all users
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          Route only for Instructors
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
            </>
          )}

          Route only for Students
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
        </Route>
        
        404 Page
        <Route path="*" element={<Error />} />
      </Routes> */}