# Frequently Asked Questions

## What is the minimum version for GCC?

GCC 9.4. C++17 support is enabled by default in GCC 11; it can be explicitly selected in earlier versions with the `-std=c++17` command-line flag or `-std=gnu++17` to enable GNU extensions as well. See [C++17 Support in GCC](https://gcc.gnu.org/projects/cxx-status.html#cxx17) for the details. Use `spack install gcc` first if your system has GCC 4. It will install GCC 12.2.0 by default. Then, run `spack compiler find` to use the newly installed gcc.

## Can I run Hermes on Mac?

No. macOS lacks several system calls that Hermes components use:

- `fopen64` / `fseeko64`
- `O_DIRECT` / `O_TMPFILE`
- `_STAT_VER`

## Can I run Hermes on Chameleon JupyterLab Server?

Maybe. However, installation with Spack will fail due to timeout. For older (< 0.8) Hermes, Google OR-Tools installation will fail.

## Why do I get `mercury->fatal` error when I use `rpc_protocol = "ofi+verbs";` in configuration file?

Such error occurs when `libfabric` is not compiled with `verbs` support. Try `spack install hermes ^libfabric fabrics=rxm,sockets,tcp,udp,verbs`.

## Why does MPI Adapter fail to compile?

We only support MPICH and OpenMPI.
