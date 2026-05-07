import "./styles.css"

export default function PopupApp(){
    return (
        <div className="popup-body">
            <main className="popup">

                <PopupHeader />

                <FocusModeCard />

                <GoalsCard />

                <AllowedSitesCard />

                <PremiumButton />

            </main>
        </div>
    );
}

function PopupHeader() {
    return (
        <header>    
            <div className="logo">LockIn</div>

            <p className="subtitle">
                A calmer environment for focused work
            </p>

        </header>
    );
} 

function FocusModeCard() {
    return (
        <section className="card mode-card">
            <div className="row">
                <div>
                    <h2>Focus Mode</h2>
                </div>

                <label className="switch">
                    <input type="checkbox" />

                    <span className="slider"></span>
                </label>

            </div>
        </section>
    );
} 

function GoalsCard() {
    return (
        <section className="card">
            <div className="section-heading">
                <h2>Today's goals</h2>
                <span className="pill">0 goals</span>
            </div>

            <div className="add-row"> 
                <input type="text" placeholder="Add a goal for today..." />
                
                <button className="small-button">Add</button>
            </div>

            <div className="goals-list"></div>
        </section>
    );
} 

function AllowedSitesCard() {
    return (
        <section className="card">
            <h2>Allowed Sites</h2>
            <p className="hint">
                Only these websites stay available while Focus Mode is on.
            </p>
            <textarea
                placeholder={`ex: gmail.com `}
            ></textarea>
            
        </section>
    );
} 

function PremiumButton() {
    return (
        <button className="premium-button">
            Upgrade to Premium $
        </button>
    );
} 
