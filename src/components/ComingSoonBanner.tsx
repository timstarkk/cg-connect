import { FC } from 'react';

const ComingSoonBanner: FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: '#2B2D31'}}>
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2" style={{color: 'white'}}>
            CG Connect
          </h1>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{color: 'white'}}>
          Coming Soon
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{color: 'white'}}>
          We're building something amazing. Our AI automation platform is under development and will be launching soon.
        </p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-lg p-6 border" style={{backgroundColor: '#4B5563', borderColor: '#6B7280'}}>
            <div className="text-2xl mb-2" style={{color: 'white'}}>🤖</div>
            <h3 className="font-semibold mb-2" style={{color: 'white'}}>AI Automation</h3>
            <p className="text-sm" style={{color: 'white'}}>Intelligent solutions for modern business</p>
          </div>
          <div className="rounded-lg p-6 border" style={{backgroundColor: '#4B5563', borderColor: '#6B7280'}}>
            <div className="text-2xl mb-2" style={{color: 'white'}}>⚡</div>
            <h3 className="font-semibold mb-2" style={{color: 'white'}}>Streamlined Operations</h3>
            <p className="text-sm" style={{color: 'white'}}>Reduce costs and unlock growth</p>
          </div>
          <div className="rounded-lg p-6 border" style={{backgroundColor: '#4B5563', borderColor: '#6B7280'}}>
            <div className="text-2xl mb-2" style={{color: 'white'}}>🚀</div>
            <h3 className="font-semibold mb-2" style={{color: 'white'}}>Modern Solutions</h3>
            <p className="text-sm" style={{color: 'white'}}>Built for the future of business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonBanner; 