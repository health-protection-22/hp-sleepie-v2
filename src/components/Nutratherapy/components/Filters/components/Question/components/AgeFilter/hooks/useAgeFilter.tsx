import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useFilters } from '../../../../../../../../../contexts/Filters';
import { useSnackbarContext } from '../../../../../../../../../contexts/Snackbar';

export function useAgeFilter() {
  const { dispatchSnackbar } = useSnackbarContext();

  const context = useNutratherapy();
  const { filters, updateFilters, clearFilters } = context;

  const filtersContext = useFilters();
  const { birthDate, setBirthDate } = filtersContext;

  const birthDateArray = birthDate.split('/').map((item) => ({ value: item, label: item }));

  function calculateAge(date: Date) {
    const millisecondDate = date.getTime();
    const actualDate = new Date().getTime();
    const differenceBetweenDates = actualDate - millisecondDate;
    const differenceInYears = differenceBetweenDates / 1000 / 60 / 60 / 24 / 365;
    return differenceInYears;
  }

  const handleDateChange = (selectedDate: Date) => {
    const userAge = calculateAge(selectedDate);
    if (userAge >= 18) {
      const selectedDateFormatted = selectedDate.toLocaleDateString('pt-BR');

      updateFilters({
        ...filters,
        answers: { ...filters.answers, age: { answer: selectedDateFormatted } },
      });

      setBirthDate(selectedDateFormatted);
    } else {
      clearFilters();
      dispatchSnackbar({
        message: `We don't recommend the product for those under 18 years old.`,
        type: 'warn',
      });
    }
  };

  return {
    birthDate,
    birthDateArray,
    handleDateChange,
  };
}
