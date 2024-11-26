import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);
  function handleTabChange(value) {
    setActiveTab(value);
  }

  function chcekIfSignInFormValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function chcekIfSignUpFormValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  return (
    <div className="flex flex-col min-h-screen m-4">
      {/* <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="w-full mx-5 pl-4 pr-16 py-3 flex justify-between items-center">
          <Link to={"/"} className="flex items-center justify-center">
            <GraduationCap className="h-8 w-8 mr-4" />
            <span className="font-extrabold text-xl">Learn2Gether</span>
          </Link>
        </div>
      </nav> */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full flex items-center justify-center mb-5">
          {/* <GraduationCap className="h-8 w-8 mr-4" /> */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-pink-500 to-blue-700 bg-clip-text text-transparent">Learn2Gether</span>
        </div>
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 gap-2">
            <TabsTrigger className="bg-gradient-to-r from-blue-100 via-violet-100 to-purple-100" value="signin">Sign In</TabsTrigger>
            <TabsTrigger className="bg-gradient-to-r from-blue-100 via-violet-100 to-purple-100" value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4 bg-gradient-to-r from-blue-50 via-violet-50 to-purple-50">
              <CardHeader>
                <CardTitle> Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!chcekIfSignInFormValid()}
                  handleSubmit={handleLoginUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4 bg-gradient-to-r from-blue-50 via-violet-50 to-purple-50">
              <CardHeader>
                <CardTitle> Create a new account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign In"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!chcekIfSignUpFormValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
