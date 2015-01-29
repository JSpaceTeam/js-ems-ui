%define maintDir /usr/local/JSpace

Name: js-ems-ui
Summary: EMS client of JSpace
Epoch: 0
Version: %{jmp_version_num}
Release: %{jmp_release_num}
License: Commercial
Group:	JMP/PLATFORM
#BuildRoot: %{_topdir}/js-ems-ui_buildroot

%description
Elements Managment System for JSpace

%prep
%setup -c -T

%build
echo "RPM_SOURCE_DIR=$RPM_SOURCE_DIR"
cp -a %{dist_dir}/%{name} .
echo "$(pwd)"
echo %{version}.%{release} > ./js-ems-ui/configuration/build_version

%install
echo RPM_BUILD_ROOT=$RPM_BUILD_ROOT
rm -rf $RPM_BUILD_ROOT
mkdir -p $RPM_BUILD_ROOT%{maintDir}
cp -r ./* $RPM_BUILD_ROOT%{maintDir}/

%clean
echo "rm -rf $RPM_BUILD_ROOT"

%files
%attr(550, root, root) %{maintDir}/*

%post

%preun

%changelog
* Tue Jan 27 2015 Shawn Wang <shawnwang@juniper.net>
- init
