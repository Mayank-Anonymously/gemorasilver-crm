// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
// hooks
import useAuth from "./hooks/useAuth";

// components
import Settings from "./components/settings";
import RtlLayout from "./components/RtlLayout";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import GoogleAnalytics from "./components/GoogleAnalytics";
import NotistackProvider from "./components/NotistackProvider";
import ThemePrimaryColor from "./components/ThemePrimaryColor";
import ThemeLocalization from "./components/ThemeLocalization";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          {/* <RtlLayout> */}
          <NotistackProvider>
            {/* <Settings /> */}
            {/* <ScrollToTop /> */}
            {/* <GoogleAnalytics /> */}
            {isInitialized ? <Router /> : <LoadingScreen />}
          </NotistackProvider>
          {/* </RtlLayout> */}
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
