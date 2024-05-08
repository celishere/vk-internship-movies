import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import axios from "axios";

import { ErrorPage } from "vk/widgets/ErrorPage/ui/ErrorPage";
import { log, LOGGER_COLORS } from "vk/shared/const/logger";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        log('core', LOGGER_COLORS.Red, 'Error: ' + error.message);

        console.error(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorPage/>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;