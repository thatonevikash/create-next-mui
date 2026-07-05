// ---------------------------------------------------------------

const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(2.5),
      boxShadow: `-4px -4px 24px 4px rgba(20, 22, 21, 0.04),
                4px 12px 12px 4px rgba(20, 22, 21, 0.04)`,
    }),
  },
};

export { MuiCard };
