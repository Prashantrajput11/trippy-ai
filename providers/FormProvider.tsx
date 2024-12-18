import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { IFormData } from "@/types";

interface FormContextType {
	formData: IFormData;
	updateFormData: (key: keyof IFormData, value: string) => void;
}
const FormContext = createContext<FormContextType | null>(null);

// Provider
const FormProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [formData, setFormData] = useState({
		travelPreference: "",
		budget: "",
		group: "",
	});

	const updateFormData = (key: string, value: string) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	console.log("state", formData.travelPreference);

	return (
		<FormContext.Provider value={{ formData, updateFormData }}>
			{children}
		</FormContext.Provider>
	);
};

export const useFormContext = () => useContext(FormContext);
export default FormProvider;

const styles = StyleSheet.create({});
