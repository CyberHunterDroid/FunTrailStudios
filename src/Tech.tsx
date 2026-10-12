import './Tech.css';
import TechCard from './TechCard';
import unityLogo from './assets/unitty.png';
import csharpLogo from './assets/Csharp.png';
import visualStudioLogo from './assets/vscode.png';

function Tech() {

    return (
        <div className="tech" id="tech">
            <div className="tech-container">
                <h2 className="tech-title">OUR TECH STACK</h2>
                <TechCard
                    title="UNITY"
                    imageUrl={unityLogo}
                ></TechCard>
                <TechCard
                    title="C#"
                    imageUrl={csharpLogo}
                ></TechCard>
                <TechCard
                    title="VISUAL STUDIO"
                    imageUrl={visualStudioLogo}
                ></TechCard>
            </div>
        </div>
    )
}
export default Tech;