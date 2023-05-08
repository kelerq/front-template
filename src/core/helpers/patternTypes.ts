export const PatternTypes = {
    DateFullRegex: '^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$',
    DateMonthRegex: '^([0-9]{4})-(0[1-9]|1[0-2])$',
    DateTimeRegex: '^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) ([2][0-3]|[01][0-9]):[0-5][0-9]$',
    TimeRegex: '^([2][0-3]|[01][0-9]):[0-5][0-9]$',
    PeselRegex: '^[0-9]{11}$',
    NIPRegex: '^[0-9]{10}$',
    KRSRegex: '^[0-9]{10}$',
    BankAccountNumberRegex: '^[0-9]{26}$',
    PostalCodeRegex: '^[0-9]{2}-[0-9]{3}$',
    PhoneNumberRegex: '^[+][0-9]{2} [0-9]{3}-[0-9]{3}-[0-9]{3}$',
    EmailRegex: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    PasswordRegex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})', // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character (all special characters allowed)  ex. Test123!
    WebsiteRegex: '^[a-zA-Z0-9_.+-]+.[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    SurnameRegex: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,20}$',
    NameRegex: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,20}$',
    StreetRegex: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9]{2,20}$',
    HouseNumberRegex: '^[a-zA-Z0-9]{1,10}$',
    FlatNumberRegex: '^[a-zA-Z0-9]{1,10}$',
    CityRegex: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,20}$',
    CountryRegex: '^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,20}$',
    SpecialCharactersRegex: '^[a-zA-Z0-9_.+-]+$',
    OneUpperCaseRegex: '^(?=.*[A-Z])',
    OneLowerCaseRegex: '^(?=.*[a-z])',
    OneNumberRegex: '^(?=.*[0-9])',
    OneSpecialCharacterRegex: '^(?=.*[!@#$%^&*])',
    MinimumEightCharactersRegex: '^(?=.{8,})',
};

export const checkPattern = (value: any, pattern: string): boolean => {
    const regex = new RegExp(pattern);
    console.log(value, pattern, 'checkPattern', regex.test(value));
    return regex.test(value);
};
