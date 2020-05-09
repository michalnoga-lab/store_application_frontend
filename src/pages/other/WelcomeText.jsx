import React from 'react';

function WelcomeText() {
    return (
        <section className="container">
            <h5 className="top-page-text">O PLATFORMIE</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ produkty</p>
                <p className="top-page-text-details-text">produkty są widoczne tylko dla zalogowanych użytkowników</p>
            </div>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ logowanie</p>
                <p className="top-page-text-details-text">platforma jest dostępna tylko dla klientów przetargowych,
                    którzy mają
                    podpisaną z nami umowę</p>
            </div>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ rejestracja</p>
                <p className="top-page-text-details-text">obecnie nie ma możliwości samodzielnej rejestracji,
                    w celu rejestracji prosimy o kontakt</p>
            </div>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ pomoc techniczna</p>
                <p className="top-page-text-details-text">filmy oraz szczegółowa instrukcja obsługi w przygotowaniu</p>
            </div>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ urządzenia mobilne</p>
                <p className="top-page-text-details-text">trwają prace nad przystosowaniem strony do wyświetlania na
                    urządzeniach
                    mobilnych, obecnie na telefonach może nie wyświetlać się prawidłowo</p>
            </div>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ kontakt</p>
                <p className="top-page-text-details-text">(12) 411 25 09, (12) 411 67 54, biuro@primakrakow.pl</p>
            </div>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ WAŻNE !!!</p>
                <p className="top-page-text-details-text">coś nie działa, masz pomysł, sugestię co poprawić na
                    platformie,
                    potrzebujesz nowej funkcjonalności - napisz do nas - biuro@primakrakow.pl</p>
            </div>
        </section>
    )
}

export default WelcomeText