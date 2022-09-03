import { IChildProps, HandlerProps } from "@/models";

export const createErrorHandler =
  ({ data, error, loading }: HandlerProps) =>
  ({ children }: IChildProps) =>
    loading ? (
      <div>Loading...</div>
    ) : data ? (
      <>{children}</>
    ) : (
      error && <div>Error: {error.message}</div>
    );
