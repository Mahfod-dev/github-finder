import { Dispatch, SetStateAction } from 'react';

export interface UsersContextProps {
	touched: boolean;
	isDisabled: boolean;
	errorMessage: JSX.Element | null;
	onBlur: () => void;
	onChange: (value: string, field: 'searchText') => void;
	searchText: string;
	onReset: () => void;
	setTouched: Dispatch<SetStateAction<boolean>>;
}