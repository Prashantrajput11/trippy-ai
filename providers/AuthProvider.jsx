import { Session, User } from "@supabase/supabase-js";
import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { ActivityIndicator } from "react-native";

import { supabase } from "../utils/supabase";

const AuthContext = createContext({ isAuthenticated: false, session: null });

export default function AuthProvider({ children }) {
	const [session, setSession] = useState(null);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setIsReady(true);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	if (!isReady) {
		return <ActivityIndicator />;
	}

	return (
		<AuthContext.Provider
			value={{ session, user: session?.user, isAuthenticated: !!session?.user }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);