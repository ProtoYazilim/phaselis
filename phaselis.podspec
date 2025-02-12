Pod::Spec.new do |s|
  s.name             = 'phaselis'
  s.version          = '1.0.0'
  s.summary          = 'A React Native component library.'
  s.description      = <<-DESC
                       A React Native component library for building cross-platform applications.
                       DESC
  s.homepage         = 'https://github.com/ProtoYazilim/phaselis'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'Your Name' => 'your.email@example.com' }
  s.source           = { :git => 'https://github.com/ProtoYazilim/phaselis.git', :tag => s.version.to_s }
  s.platform         = :ios, '10.0'
  s.source_files     = 'src/**/*.{h,m,swift}'
  s.dependency       'React'
  s.dependency       'React-Core'
  s.dependency       'React-RCTText'
  s.dependency       'React-RCTImage'
  s.dependency       'React-RCTLinking'
end
