export default function useLocalStorage(key: string, value: string): void;
export default function useLocalStorage(key: string): string | null;

export default function useLocalStorage(
    key: string,
    value?: string
): string | null | void {
    const caseNumber: number =
        typeof value === "string" && value !== undefined ? 1 : 2;

    switch (caseNumber) {
        case 1:
            if(value){
                localStorage.setItem(key, value);
            }

            break;
        case 2:
            return localStorage.getItem(key);
    }
}
